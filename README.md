# School Tools

Eine schlanke Web-App ohne Login und ohne Build-Schritt. Sie besteht nur aus statischen Dateien plus optionalem Python-Webserver und eignet sich damit gut fuer einen Raspberry Pi im Tailscale-Netz.

## Als Programm unter Windows starten

Wenn du das Projekt als `.zip` von GitHub herunterlaedst:

1. `.zip` entpacken
2. `Tools-App.exe` doppelklicken

Die EXE startet keinen lokalen Webserver. Sie oeffnet die App als eigenes Desktop-Fenster ueber Microsoft Edge im App-Modus, direkt aus den entpackten Dateien.

## Als Webserver starten

```bash
python3 serve.py --host 0.0.0.0 --port 8080
```

Danach im Browser:

```text
http://localhost:8080
```

Auf dem Raspberry Pi im Tailscale-Netz:

```text
http://<tailscale-ip-oder-magicdns-name>:8080
```

## Als systemd-Dienst auf dem Raspberry Pi

```ini
[Unit]
Description=School Tools Web App
After=network-online.target

[Service]
WorkingDirectory=/home/pi/school-tools
ExecStart=/usr/bin/python3 /home/pi/school-tools/serve.py --host 0.0.0.0 --port 8080
Restart=always
User=pi

[Install]
WantedBy=multi-user.target
```

Speichern als `/etc/systemd/system/school-tools.service`, dann:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now school-tools
```

## Struktur

- `index.html`: Einstiegspunkt
- `styles.css`: Liquid-Glass-inspirierte Oberflaeche
- `app.js`: Routing, Tools, Mathematikparser und lokale Karteikarten
- `serve.py`: kleiner Webserver mit SPA-Fallback
- `Tools-App.exe`: Windows-Launcher fuer Desktop-Start aus dem entpackten GitHub-Zip
- `launcher/ToolsAppLauncher.cs`: Quellcode fuer die Windows-EXE
- `build-windows-launcher.ps1`: baut `Tools-App.exe` neu
