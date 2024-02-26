# Wasserrad im Mühlebachkanal

Bauplan für ein einfaches Wasserrad im Mühlebach, respektive [Nuolenbach](https://search.ortsnamen.ch/de/record/16006626).

Inhalt

1. [Typ und Grösse des Rades bestimmen](#1-typ-und-grösse-des-rades-bestimmen)
    1. [Wasserrad-Typ](#11-wasserrad-typ)
    2. [Geometrie des Bachbettes](#12-geometrie-des-bachbettes)
    3. [Fliessgeschwindigkeit des Wassers](#13-fliessgeschwindigkeit-des-wassers)
        1. [Messung der Geschwindigket](#131-messung-der-geschwindigket)
2. [Drehzahl des Wasserrades bestimmen](#2-drehzahl-des-wasserrades-bestimmen)
    1. [Drehzahl berechnen](#21-drehzahl-berechnen)
3. [Konstruktion und Bau](#3-konstruktion-und-bau)
4. [Webseite und Online-Quiz](#4-webseite-und-online-quiz)

## 1. Typ und Grösse des Rades bestimmen

Das Wasserrad soll so gebaut werden, dass es auf einfache Weise im Bachbett des Mühlebach montiert werden kann. Zudem soll es genügend Drehmoment liefern, um zwei kleine Treicheln zum Läuten zu bringen. Dabei müssen folgende Punkte beachtet werden:

* 💡 Geometrie und Gegebenheiten des Bachbettes.
* 💡 Je grösser der Durchmesser, je geringer die Drehzahl und je grösser das Drehmoment.
* 💡 Strömungsgeschwindigkeit (Fliessgeschwindigkeit des Wassers). Je schneller die Fliessgeschwindigkeit, je höher die Drehzahl und das Drehmoment des Wasserrades.

### 1.1 Wasserrad-Typ

Es gibt drei Haupttypen von Wasserrädern:

* **Oberschlächtiges Wasserrad:** Das Wasser trifft von oben auf die Schaufeln des Rads und nutzt die Schwerkraft, um es in Bewegung zu setzen.

* **Mittelschlächtiges Wasserrad:** Das Wasser trifft seitlich auf das Rad und erzeugt dadurch Drehmoment.

* **Unterschlächtiges Wasserrad:** Das Rad wird durch den Wasserstrom von unten angetrieben, während es in Bewegung ist.

![Wasserrad-Typen](./docs/images/Unter-vs-Oberschlaechtig.drawio.svg)  

Das unterschlächtige Wasserrad ist der am weitesten verbreitete Rad-Typ. Im Vergleich zum oberschlächtigen und mittelschlächtigen Wasserrad hat es den geringsten Wirkungsgrad, da es sich die Schwerkraft nicht zu Nutze macht. Das Wasser "fällt" nicht nach unten. Dafür braucht es nur einen sehr geringen Höhenunterschied zwischen Ein- und Auslauf.

> ✅ Für das Vorhaben wird ein **Unterschlächtiges Wasserrad** gewählt.

### 1.2 Geometrie des Bachbettes

Auf der [Höhe Restaurant Falken](https://maps.app.goo.gl/M48FYfqZdci4fe548) ist das Bachbett des Mühlebach betoniert. Der Querschnitt entspricht einem [Trapez](https://de.wikipedia.org/wiki/Trapez_(Geometrie)), bei welchem die obere Grundseite etwas breiter ist.

![Bachbettgeometrie](./docs/images/2024-02-02_Nuolenbach_Bachbett_Geometrie.jpg)  
*Der maximale Wasserstand variiert je nach Position zwischen 290 und 360 mm.*

![Höhe und Tiefe des Bettes](./docs/images/2023-02-11_Nuolenbach_Tiefe_und_Breite.jpg)  
*Bachbett vor der Kurve mit einer Breite von 3.5 und einer Tiefe von 1.3 Meter.*

Damit die Schaufeln des Wasserrades tatsächlich ins Wasser eintauchen können, ist ein Radius von mehr als 290 mm erforderlich. Idealerweise sollte er sogar deutlich grösser sein. Denn nicht nur die Schaufel muss ins Wasser eintauchen, auch die Welle kann nicht direkt an der Oberkante des Bachbettes montiert werden, wie in folgender Grafik gezeigt wird.

![Bachbettgeometrie](./docs/images/Bachbett.drawio.svg)  
*Bachbett mit einer Breite von 3.5 und einer Tiefe von 1.3 Meter.*

Auf die Fliessgeschwindigkeit des Wassers, welche in der obigen Grafik eingezeichnet ist, wird im nächsten Kapitel eingegangen.

> ✅ Der [Radius](https://de.wikipedia.org/wiki/Radius) des Wasserrades muss **mehr als 290 mm** betragen.

### 1.3 Fliessgeschwindigkeit des Wassers

Neben den geometrischen Gegebenheiten soll auch die Fliessgeschwindigkeit des Wassers berücksichtigt werden. Grundsätzlich kann man festhalten:

* 💡 Das Wasser fliesst in der Mitte schneller als aussen und am Flussboden. Dies weil das Bachbett einen Widerstand darstellt. An den Seitenwänden und am Boden entsteht Reibung, dadurch wird das Wasser abgebremst.
* 💡 In der Aussenkurve ([Prallhang](https://de.wikipedia.org/wiki/Prallhang)) fliesst das Wasser schneller. Da die äussere Seite der Kurve einen grösseren Radius hat als die innere Seite, muss das Wasser an der Aussenseite der Kurve eine grössere Strecke zurücklegen. Um die Kontinuität aufrechtzuerhalten, erhöht das Wasser seine Geschwindigkeit an der äusseren Seite, während es auf der inneren Seite langsamer fliesst.

![Strömung in einer Kurve](./docs/images/Bachbett_in_Kurve.drawio.svg)  
*In der Kurvenaussenseite fliesst das Wasser schneller als innen.*

Auf die Strömung bezogen wäre es am besten, das Rad in der Aussenseite der folgenden Kurve zu montieren. Weil sich die Montage dort jedoch als eher schwierig gestalten würde und weil die Welle extrem lang sein müsste, sodass die Schaufeln das Bachbett nicht touchieren würden, wird davon abgesehen.

![Rechtskurve des Mühlebach](./docs/images/2023-02-11_Nuolenbach_Rechtskurve.jpg)  
*Rechtskurve auf der Höhe Mühlestrasse 27 in Siebnen*

> ✅ Trotz der geringeren Strömung am Rand, wird das Rad an einem **geraden Abschnitt vor der Kurve montiert**.

#### 1.3.1 Messung der Geschwindigket

Die Geschwindigkeit des Wassers wird empirisch ermittelt.

Empirisch bedeutet in diesem Fall, dass wir ein Experiment durchgeführt haben, um die Geschwindigkeit zu ermitteln. Gemessen wird die Zeit, welche schwimmendes Laub und Moos benötigt, um eine Strecke von 10 Metern zu überwinden.

![Geschwindigkeitsmessung](./docs/images/2024-02-02_Nuolenbach_Geschwindigkeit.jpg)  
*Empirische Ermittlung der Geschwindigkeit*

Aus Strecke und Zeit kann anschliessend die Geschwindigkeit errechnet werden. Folgende Messungen wurden am 2. Februar 2024 durchgeführt:

* 14.39 sec für 10 m im ersten Versuch ➡️ **Geschwindigkeit 0.6949 m/s** oder 2.5017 km/h
* 15.44 sec für 10 m im zweiten Versuch ➡️ **Geschwindigkeit 0.6477 m/s** oder 2.3316 km/h

Nachträglich wurde in Erfahrung gebracht, dass pro Sekunde 2.14 m3 Wasser im Mühlebach fliessen. Die Fläche des Bachs im Querschnitt beträgt (Breite x Höhe) 3.4 m x 1.01 m = 3.434 m2. Rechnet man nun die 2.14 Kubikmeter durch die Fläche, erhält man die Distanz, welche das Wasser in einer Sekunde zurücklegt: 2.14 / 3.434 = 0.623 m/s.

> ✅ Die errechnete Geschwindigkeit ist mit 0.623 m/s somit noch etwas geringer als die gemessene Geschwindigkeit (0.6477 m/s und 0.6949 m/s).

## 2. Drehzahl des Wasserrades bestimmen

Beim idealen Wasserrad ist die Umlaufgeschwindigkeit des Rades gleich der Fliessgeschwindigkeit des Wassers.

Das ist in der Realität natürlich nicht der Fall. Es gibt Reibungsverluste sowie fliesst ein Teil des Wassers rechts und links sowie unten an der Schaufel vorbei. Zusätzlich wird die Schaufel nicht immer im 90°-Winkel angeströmt.

Die Umlaufgeschwindigkeit des Rades (und somit auch die Drehzahl) wird geringer sein als die Geschwindigkeit des fliessenden Wassers.

Dennoch wird im folgenden Beispiel mit den Idealbedingungen gerechnet.

![Umlaufgeschwindigkeit](./docs/images/Umlaufgeschwindigkeit.drawio.svg)  
*Um die Berechnung zu vereinfachen, wird angenommen, dass die Umlaufgeschwindigkeit des Wasserrades gleich der Fliessgeschwindigkeit des Wassers ist.*

### 2.1 Drehzahl berechnen

Als Taschenrechner dient die kostenloste Open-Source Software [GNU Octave](https://octave.org/), mit welcher folgendes [MATLAB Skript](https://de.wikipedia.org/wiki/Matlab) ausgeführt werden kann.

```matlab
% Clear and close all
clc
clear
close

%-------------------------------------------------------------------------------
% Flussgeschwindigkeit des Baches (empirisch aus Messungen)
%-------------------------------------------------------------------------------
% Am 02.02.2024 wurden 2 Messungen vor Ort gemacht. Es wurde die Zeit gemessen,
% welche schwimmendes Moos für eine Distanz von 10 Metern benötigt.

disp('Geschwindigkeit v [m/s] (empirisch aus Messungen)')
s = 10                        % Strecke [m]
t = 14.39                     % Zeit [s]
v = s/t                       % 0.6949
vKmH = v * 3.6                % 2.5017

%-------------------------------------------------------------------------------
% Flussgeschwindigkeit des Baches (errechnet aus Unterlagen)
%-------------------------------------------------------------------------------
% Gemäss Vertrag mit dem Kraftwerk Wägital von 1925 hatte das EW Wirth einen
% Anspruch auf eine Dotierwassermenge von 2.14 m3/s. Mit dieser Menge wird der
% Kanal nach wie vor betrieben.

disp('')
disp('Geschwindigkeit v [m/s] (errechnet aus Unterlagen)')
b = 3.4                        % Bachbett Breite [m]
h = 1.01                       % Bachbett Höhe Wasserstand [m]
V = 2.14                      % Dotierwassermenge Mühlebach [m3/s]
A = b * h                     % Fläche Mühlebach im Querschnitt [m2]
vErrechnet = V / A            %
vKmHErrechnet = (V / A) * 3.6 %

%-------------------------------------------------------------------------------
% Drehzahl des idealen Wasserrades
%-------------------------------------------------------------------------------
% Beim idealen Wasserrad ist die Umlaufgeschwindigkeit gleich der Flussge-
% schwindigkeit des Baches. In der Realität wirkt jedoch immer ein Gegenmoment
% auf das Drehmoment, welches vom Wasser erzeugt wird.
%
% Ein teil des Wassers wird fliesst rechts, link und unten an der Schaufel
% vorbei. Ebenfalls gibt es Reibungsverluste von der Mechanik. Zudem wird die
% Schaufel nicht immer im 90° Winkel angeströmt. Deshalb ist die Umlauf-
% Geschwindigkeit langsamer als Flussgeschwindigkeit. Siehe
% https://de.wikipedia.org/wiki/Wasserrad#Leistung_und_Wirkungsgrad

disp('')
disp('Drehzahl n [1/s]')
d = 0.9                       % Durchmesser Wasserrad bei Radschaufelmitte [m]
n = v / (d * pi)              % 0.2458

% Umdrehungen pro Minute. Tendenziell wird s

disp('')
disp('Umdrehungen pro Minute nMin [1/min]')
nMin = n * 60                 % 14.747
```

> ✅ Die Berechnung zeigt: Je grösser der Durchmesser, je niedriger die Drehzahl. Bei einem Durchmesser von 900 mm beträgt die errechnete Drehzahl **14.7 Umdrehungen pro Minute**.

## 3. Konstruktion und Bau

ToDo: Beschreibung

![Rad](./docs/images/Rad.drawio.svg)

![Ständer](./docs/images/Staender.drawio.svg)

## 4. Webseite und Online-Quiz

[https://philippbruhin.github.io/wasserrad/](https://philippbruhin.github.io/wasserrad/)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
