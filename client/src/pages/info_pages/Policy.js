import React, { useEffect } from 'react';

import { AppContainer, AppSection } from '@root/app/styled_components';
import { InnerCard } from './styled_components';

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppSection>
      <AppContainer>
        <h3>Regulamin serwisu sellbox.pl</h3>

        <InnerCard>
          <ul>
            <li>
              <a href="#1">Postanowienia ogólne</a>
            </li>
            <li>
              <a href="#2">Obowiązek przestrzegania prawa</a>
            </li>
            <li>
              <a href="#3">Zamawianie usługi Ogłoszenie Drobne</a>
            </li>
            <li>
              <a href="#4">Treść Ogłoszeń Drobnych</a>
            </li>
            <li>
              <a href="#5">Bezpłatne Ogłoszenia Drobne</a>
            </li>
            <li>
              <a href="#6">Płatne Ogłoszenia Drobne</a>
            </li>
            <li>
              <a href="#7">Faktury VAT</a>
            </li>
            <li>
              <a href="#8">Obowiązki i odpowiedzialność Klienta</a>
            </li>
            <li>
              <a href="#9">Obowiązki i odpowiedzialność Serwisu</a>
            </li>
            <li>
              <a href="#10">Postępowanie reklamacyjne</a>
            </li>
            <li>
              <a href="#11">Postanowienia końcowe</a>
            </li>
          </ul>
          <div>
            <div>
              <p id="1">
                <strong>I. Postanowienia ogólne</strong>
              </p>
              <p>
                1. "Regulamin" oznacza Regulamin świadczenia usługi "Ogłoszenia Drobne" w serwisie sellbox.pl, zwanej w dalszej części regulaminu
                "Ogłoszenia Drobne".
                <br /> <br />
                2. Usługodawcą jest firma eBielak Ruda Bugaj ul. Podleśna 22a Aleksandrów Łódzki 95-070 NIP 7322134000 - zwana w dalszej części
                regulaminu "firmą".
                <br /> <br />
                3. Klientem w rozumieniu Regulaminu jest podmiot zlecający sellbox.pl świadczenie usługi Ogłoszenie Drobne poprzez wysłanie formularza
                ze strony dodawania ogłoszenia.
                <br /> <br />
                4. Usługa Ogłoszenie Drobne to usługa polegająca na utrzymaniu ogłoszenia Klienta w części serwisu sellbox.pl zwanej "Ogłoszenia".
                <br /> <br />
                5. Wysyłając formularz ze strony dodawania ogłoszenia Klient oświadcza, iż zapoznał się i akceptuje w całości Regulamin.
                <br /> <br />
                6. sellbox.pl zastrzega sobie prawo zmian Regulaminu bez wcześniejszego informowania o tym użytkowników. Zmiany te obowiązują od
                chwili udostępnienia nowej wersji Regulaminu. Aktualna wersja Regulaminu dostępna jest na stronie https://sellbox.pl/regulamin
              </p>
              <p id="2">
                <strong>II. Obowiązek przestrzegania prawa</strong>
                <br /> <br />
                1. Klient zobowiązuje się do korzystania z usługi w sposób nienaruszający praw osób trzecich (dóbr osobistych, praw autorskich),
                dobrych obyczajów ani przepisów prawa oraz ponosi odpowiedzialność za sposób wykorzystania usługi przez podmioty trzecie, którym
                Klient udostępnia usługę.
                <br /> <br />
                2. W przypadku uzyskania przez firmę informacji o korzystaniu przez Klienta z usługi niezgodnie z Regulaminem lub z przepisami prawa,
                firma ma prawo przetwarzać posiadane dane w celu ustalenia jego odpowiedzialności, a także przekazać te dane odpowiednim organom
                władzy publicznej.
                <br /> <br />
                3. Dane kontaktowe Klientów serwisu sellbox.pl służą do nawiązania kontaktu z ogłoszeniodawcą w celu przeprowadzenia transakcji.
                Korzystanie z nich w jakikolwiek inny sposób, a w szczególności ich przetwarzanie, upowszechnianie lub dystrybucja, jest zabronione.
              </p>
              <p id="3">
                <strong>III. Zamawianie usługi Ogłoszenie Drobne</strong>
                <br /> <br />
                1. Zamówienie usługi następuje poprzez wysłanie formularza ze strony dodawania ogłoszenia.
                <br /> <br />
                2. Publikacja Ogłoszenia Drobnego dokonywana jest na podstawie danych w prawidłowo wysłanym formularzu ze strony dodawania ogłoszenia.
                <br /> <br />
                3. Ogłoszenie Drobne publikowane jest w serwisie sellbox.pl przez okres min 30 dni.
              </p>
              <p id="4">
                <strong>IV. Treść Ogłoszeń Drobnych</strong>
                <br /> <br />
                1. Zabrania się dodawania Ogłoszeń Drobnych, które:
                <br />- naruszają prawo,
                <br />- naruszają prawa osób trzecich (dobra osobiste, prawa autorskie),
                <br />- naruszają dobre obyczaje oraz normy moralno-etyczne,
                <br />- mają charakter towarzyski z podtekstem erotycznym, a ich treść wskazuje na zamiar ułatwienia bądź nawiązania kontaktów
                mających cel inny niż matrymonialny i zostały umieszczone w nieodpowiedniej kategorii,
                <br />- mają charakter wypowiedzi, komentarza, opinii, oceny, podobny do postów umieszczanych na forum internetowym,
                <br />- zawierają reklamy serwisów, które w jakikolwiek sposób mogą być konkurencyjne dla sellbox.pl
                <br /> <br />
                2. W przypadku stwierdzenia, że treść Ogłoszenia Drobnego (zarówno bezpłatnego jak i płatnego) narusza postanowienia niniejszego
                regulaminu, firma zastrzega sobie prawo do usunięcia takiego Ogłoszenia.
                <br /> <br />
                3. W przypadku stwierdzenia, że Ogłoszenie Drobne (zarówno bezpłatne jak i płatne) zostało zamieszczone w kategorii niezgodnej z jego
                treścią, firma zastrzega sobie prawo do przesunięcia ogłoszenia do właściwej kategorii lub do jego usunięcia.
              </p>
              <p id="5">
                <strong>V. Bezpłatne Ogłoszenia Drobne</strong>
                <br /> <br />
                1. Do zamieszczenia bezpłatnego Ogłoszenia wymagane jest uzupełnienie prawidłowo wszytskich danych w formularzu ze strony dodawania
                ogłoszenia.
                <br /> <br />
                2. Klient ma prawo do zamieszczenia ogłoszenia drobnego w przeznaczonej do tego kategorii.
                <br /> <br />
                3. W przypadku stwierdzenia, że ogłoszenie jest niezgodne z kategorią lub regulaminem, może ono być usunięte bez podania przyczyny.
                <br /> <br />
                4. Zamieszczenie Ogłoszenia Drobnego dokonuje się z odpowiedniej pozycji uwzględnionej w portalu.
              </p>
              <p id="6">
                <strong>VI. Płatne Ogłoszenia Drobne</strong>
                1. Klient ma prawo do zamieszczenia dowolnej ilości płatnych Ogłoszeń.
                <br /> <br />
                2. Zamieszczenia ogłoszenia dokonuje się z odpowiedniej pozycji uwzględnionej w portalu.
              </p>
              <p>CENNIK:</p>
              <p>7dni - 5.99zł</p>
              <p>30 dni - 12.99zł</p>
              <p>Odświeżenie ogłoszenia - 2.99zł</p>
              <p>3. Rozliczenia transakcji kartą kredytową i e-przelewem przeprowadzane są za pośrednictwem przelewy24.pl.</p>
              <p id="7">
                <strong>VII. Faktury VAT</strong>
              </p>

              <p>1. Użytkownik ma prawo poprosić o fakturę vat w terminie do 7 dni od dokonanje płatności w serwisie.</p>
              <p>2. Aby wysłać prośbę o wystawienie faktury vat należy wysłać e-mail z w/w prośbą na adres kontakt@sellbox.pl</p>
              <p>
                3. Faktura VAT zostanie wysłana na adres e-mail z którego została wysłana prośba w terminie do 7 dni od otrzymania wiadomości z
                prośbą.
              </p>
              <p>
                4. Aby uzyskać zbiorczą fakturę vat prosimy o wcześniejszy kontakt meilowy pod adresem kontakt@sellbox.pl w temacie wpisująć "Zbiorcza
                faktura VAT" a w treści wiadomości podać adres email do kórego jest dopisane konto oraz za jaki okres ma być wystawiona faktura vat.
              </p>
              <p id="9">
                <strong>IX. Obowiązki i odpowiedzialność Klienta</strong>
              </p>
              <p>
                1. Klient ponosi pełną odpowiedzialność za wykorzystanie udostępnionej przez sellbox.pl usługi Ogłoszenie Drobne.
                <br />
                2. firma ma prawo niezwłocznie zaprzestać świadczenia usługi danemu Klientowi, bez prawa zwrotu wniesionej opłaty, jeżeli:
                <br />- Klient złamie postanowienia niniejszego regulaminu,
                <br />- Klient będzie korzystał z usługi Ogłoszenie Drobne niezgodnie z jej przeznaczeniem i określonymi parametrami,
                <br />- Klient będzie działał na szkodę innych Klientów sellbox.pl lub użytkowników sieci Internet.
              </p>
              <p id="10">
                <strong>X. Obowiązki i odpowiedzialność firmy eBielak Ruda Bugaj ul. Podleśna 22a Aleksandrów Łódzki 95-070 NIP 7322134000</strong>
                <br /> <br />
                1. firma zobowiązany jest do świadczenia usługi Ogłoszenia Drobne w pełnym zakresie z należytą starannością.Firma nie ponosi
                odpowiedzialności za niewykonanie lub nienależyte wykonanie usługi z przyczyn leżących po stronie innych podmiotów.
                <br /> <br />
                2. firma zastrzega sobie prawo do robienia możliwie krótkich przerw technicznych w funkcjonowaniu usługi Ogłoszenia Drobne w czasie
                najmniejszego obciążenia, związanych z obsługą i konserwacją systemu.
                <br /> <br />
                3. firma nie ponosi odpowiedzialności za ewentualne szkody powstałe m.in. w wyniku:
                <br />- braku ciągłości świadczenia usługi spowodowanym działaniem lub zaniechaniem podmiotów trzecich
                <br />- klęsk żywiołowych,
                <br />- nieprawidłowego wykorzystania udostępnionej usługi,
                <br />- wykorzystania udostępnionych Klientowi informacji autoryzujących dostęp do usługi przez podmioty trzecie,
                <br /> <br />
                4. firma nie bierze odpowiedzialności za skutki dostępu do usług Płatne Ogłoszenia Drobne przez osoby nieupoważnione na skutek
                kradzieży, ujawnienia lub przechwycenia danych dostępowych.
                <br /> <br />
                5. firma nie ponosi odpowiedzialności za treści zawarte w zamieszczanych Ogłoszeniach Drobnych.
                <br /> <br />
                6. firma nie ponosi odpowiedzialności za utracone korzyści.
                <br /> <br />
                7. Odpowiedzialność firmy jest w każdym przypadku ograniczona do wartości opłaty wniesionej przez Klienta.
              </p>
              <p id="11">
                <strong>XI. Postępowanie reklamacyjne</strong>
                <br /> <br />
                1. Reklamacja Klienta w związku z niewykonaniem lub nienależytym wykonaniem usług winna zostać przesłana firmie w formie listu e-mail
                na kontakt@sellbox.pl i określać:
                <br />- dane Klienta umożliwiające kontakt z nim oraz identyfikację jako Klienta Ogłoszeń Drobnych,
                <br />- dane ogłoszenia umożliwiające jego identyfikację (ID ogłoszenia, datę jego dodania, link do ogłoszenia)
                <br />- zarzuty Klienta,
                <br />- okoliczności uzasadniające reklamację,
                <br /> <br />
                2. Firma obowiązana jest udzielić odpowiedzi na reklamację w możliwie szybkim terminie, maksymalnie w ciągu 7 dni od daty jej
                otrzymania, wskazując, czy uznaje reklamację oraz w jaki sposób zamierza ją załatwić lub informując o braku podstaw do uznania
                reklamacji wraz z uzasadnieniem swojego stanowiska. W przypadku konieczności wyjaśnienia dodatkowych okoliczności związanych z
                usługami świadczonymi na rzecz firmy przez podmioty, za które firma nie ponosi odpowiedzialności, firma przesyła w terminie 7 dni
                informację o potrzebie wyjaśnienia tych okoliczności.
              </p>
              <p id="12">
                <strong>XII. Postanowienia końcowe</strong>
                <br /> <br />
                1. Do umowy pomiędzy Klientem a firmą zastosowanie ma prawo polskie. Strony zobowiązane są do przestrzegania aktualnie obowiązującego
                w Polsce prawa.
                <br /> <br />
                2. Wszelkie spory mogące wyniknąć z umowy pomiędzy Klientem a firmą, którym nie uda się zapobiec w drodze negocjacji, rozstrzygane
                będą przez właściwy sąd powszechny.
                <br /> <br />
                3. Firma zastrzega sobie prawo do rozwiązania umowy w przypadku złamania przez Klienta postanowień umowy.
                <br /> <br />
                4. Regulamin obowiązuje od dnia 01.01.2016 r
              </p>
            </div>
          </div>
        </InnerCard>
      </AppContainer>
    </AppSection>
  );
};

export default Policy;
