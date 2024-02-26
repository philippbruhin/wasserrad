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
