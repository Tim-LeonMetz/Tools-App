$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$compiler = Join-Path $env:WINDIR "Microsoft.NET\Framework64\v4.0.30319\csc.exe"

if (-not (Test-Path $compiler)) {
    throw "C# compiler not found: $compiler"
}

& $compiler /nologo /target:winexe /optimize+ /reference:System.Windows.Forms.dll /out:(Join-Path $root "Tools-App.exe") (Join-Path $root "launcher\ToolsAppLauncher.cs")

Write-Host "Created Tools-App.exe"
