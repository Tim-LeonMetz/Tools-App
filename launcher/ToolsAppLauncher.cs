using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;
using Microsoft.Win32;

namespace ToolsAppLauncher
{
    internal static class Program
    {
        private const string AppName = "Tools-App";

        [STAThread]
        private static int Main()
        {
            string root = AppDomain.CurrentDomain.BaseDirectory;
            string indexPath = Path.Combine(root, "desktop.html");

            if (!File.Exists(indexPath))
            {
                ShowError("desktop.html wurde nicht gefunden.\n\nBitte die EXE im entpackten Projektordner neben desktop.html starten.");
                return 1;
            }

            try
            {
                string edgePath = FindEdge();
                string appUrl = new Uri(indexPath).AbsoluteUri + "#/";

                if (!string.IsNullOrEmpty(edgePath))
                {
                    string profileDir = Path.Combine(
                        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                        "Tools-App",
                        "EdgeProfile"
                    );

                    Directory.CreateDirectory(profileDir);

                    ProcessStartInfo info = new ProcessStartInfo
                    {
                        FileName = edgePath,
                        Arguments = "--app=\"" + appUrl + "\" --allow-file-access-from-files --user-data-dir=\"" + profileDir + "\"",
                        UseShellExecute = false,
                        WorkingDirectory = root
                    };
                    Process.Start(info);
                    return 0;
                }

                Process.Start(new ProcessStartInfo
                {
                    FileName = indexPath,
                    UseShellExecute = true,
                    WorkingDirectory = root
                });
                return 0;
            }
            catch (Exception ex)
            {
                ShowError("Die Tools-App konnte nicht gestartet werden.\n\n" + ex.Message);
                return 1;
            }
        }

        private static string FindEdge()
        {
            string fromRegistry = ReadAppPath();
            if (File.Exists(fromRegistry))
            {
                return fromRegistry;
            }

            string[] candidates =
            {
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles), "Microsoft", "Edge", "Application", "msedge.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86), "Microsoft", "Edge", "Application", "msedge.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Microsoft", "Edge", "Application", "msedge.exe")
            };

            foreach (string candidate in candidates)
            {
                if (File.Exists(candidate))
                {
                    return candidate;
                }
            }

            return null;
        }

        private static string ReadAppPath()
        {
            try
            {
                using (RegistryKey key = Registry.LocalMachine.OpenSubKey(@"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\msedge.exe"))
                {
                    object value = key == null ? null : key.GetValue("");
                    return value == null ? null : value.ToString();
                }
            }
            catch
            {
                return null;
            }
        }

        private static void ShowError(string message)
        {
            MessageBox.Show(message, AppName, MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
    }
}
