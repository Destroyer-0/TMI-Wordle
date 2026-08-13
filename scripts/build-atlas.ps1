Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$iconSize = 26
$atlases = @(
  @{
    DataFile = "data.js"
    Variable = "TMI_RECIPES"
    ImageFolder = "Foods"
    OutputFile = "foods-atlas.png"
    Columns = 16
  },
  @{
    DataFile = "beverages.js"
    Variable = "TMI_BEVERAGES"
    ImageFolder = "Bev"
    OutputFile = "beverages-atlas.png"
    Columns = 8
  }
)

foreach ($atlas in $atlases) {
  $dataPath = Join-Path $projectRoot $atlas.DataFile
  $source = Get-Content -LiteralPath $dataPath -Raw -Encoding UTF8
  $pattern = "(?s)window\." + [regex]::Escape($atlas.Variable) + "\s*=\s*(\[.*\]);"
  $match = [regex]::Match($source, $pattern)
  if (-not $match.Success) {
    throw "Could not read $($atlas.Variable) from $($atlas.DataFile)."
  }

  $items = $match.Groups[1].Value | ConvertFrom-Json
  $rows = [math]::Ceiling($items.Count / $atlas.Columns)
  $bitmap = New-Object System.Drawing.Bitmap ($atlas.Columns * $iconSize), ($rows * $iconSize), ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

  try {
    $graphics.Clear([System.Drawing.Color]::Transparent)
    $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy

    for ($index = 0; $index -lt $items.Count; $index++) {
      $filename = $items[$index].name.Trim('"') + ".png"
      $imagePath = Join-Path (Join-Path $projectRoot $atlas.ImageFolder) $filename
      if (-not (Test-Path -LiteralPath $imagePath)) {
        throw "Missing icon: $imagePath"
      }

      $image = [System.Drawing.Image]::FromFile($imagePath)
      try {
        if ($image.Width -ne $iconSize -or $image.Height -ne $iconSize) {
          throw "Icon must be ${iconSize}x${iconSize}: $imagePath"
        }
        $x = ($index % $atlas.Columns) * $iconSize
        $y = [math]::Floor($index / $atlas.Columns) * $iconSize
        $graphics.DrawImageUnscaled($image, $x, $y)
      } finally {
        $image.Dispose()
      }
    }

    $outputPath = Join-Path $projectRoot $atlas.OutputFile
    $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output "$($atlas.OutputFile): $($items.Count) icons, $($bitmap.Width)x$($bitmap.Height)"
  } finally {
    $graphics.Dispose()
    $bitmap.Dispose()
  }
}
