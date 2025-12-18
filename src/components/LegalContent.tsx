export const ImpressumContent = () => (
  <div className="space-y-4 text-sm">
    <h4 className="font-bold text-white text-lg mb-2">Impressum</h4>
    <p>Angaben gemäß § 5 TMG</p>
    
    <div>
        <strong>Kontakt</strong><br />
        E-Mail: dev@fredie.io
    </div>

    <div className="mt-4 space-y-3">
        <h5 className="font-bold text-white">Haftung für Inhalte</h5>
        <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
            Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
            oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h5 className="font-bold text-white">Haftung für Links</h5>
        <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter 
            oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h5 className="font-bold text-white">Urheberrecht</h5>
        <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
            der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, 
            nicht kommerziellen Gebrauch gestattet.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>
    </div>
  </div>
);

export const PrivacyContent = () => (
    <div className="space-y-4 text-sm">
        <h4 className="font-bold text-white text-lg mb-2">Datenschutzerklärung</h4>
        <h5 className="font-bold text-white">1. Datenschutz auf einen Blick</h5>
        <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        
        <h5 className="font-bold text-white">2. Datenerfassung in dieser App</h5>
        <p>
            <strong>Lokale Speicherung (LocalStorage):</strong><br />
            Diese Anwendung speichert die eingegebenen Namen der Teilnehmer und deren Geschenke-Status ausschließlich lokal auf Ihrem Endgerät ("LocalStorage"). 
            Es werden keine Daten an einen externen Server übertragen.
        </p>
        
        <h5 className="font-bold text-white">3. Hosting</h5>
        <p>
            Diese Anwendung wird über GitHub Pages gehostet. Der Anbieter ist GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.
            Beim Aufruf der Webseite erfasst GitHub automatisch Log-Daten (z.B. IP-Adresse). Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub.
        </p>

        <p className="text-xs text-white/50 pt-4 border-t border-white/10">
            Stand: Dezember 2025
        </p>
  </div>
);
