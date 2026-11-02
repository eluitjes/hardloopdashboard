# Publicatiehandleiding

## GitHub Pages en HTTPS
1. Maak een GitHub-repository `hardloopdashboard`.
2. Upload de inhoud van deze map; `index.html` staat in de hoofdmap.
3. Open **Settings > Pages**.
4. Kies **Deploy from a branch**, branch `main`, map `/ (root)`.
5. Open het gepubliceerde `github.io`-adres en schakel **Enforce HTTPS** in.

## iPhone installeren
1. Open het HTTPS-adres in Safari.
2. Kies **Deel > Zet op beginscherm**.
3. Schakel **Open als webapp** in en kies **Voeg toe**.

## Cloudback-up
1. Maak een Supabase-project.
2. Voer `supabase_setup.sql` uit in de SQL Editor.
3. Kopieer Project URL en anon/publishable key.
4. Open **Cloud** in de app, vul URL, key, e-mail en wachtwoord in.
5. Kies **Account maken**, daarna **Inloggen** en **Nu back-uppen**.
6. De app back-upt daarna automatisch na wijzigingen en bij het naar de achtergrond gaan.

## iPhone-test
Open **Cloud > PWA-diagnose**. Test daarna: CSV-import, training opslaan, heropenen, vliegtuigmodus, cloudback-up en cloudherstel.

## Web Inspector
Op iPhone: **Instellingen > Apps > Safari > Geavanceerd > Webinspector**. Verbind met een Mac en inspecteer via Safari's ontwikkelaarsmenu.
