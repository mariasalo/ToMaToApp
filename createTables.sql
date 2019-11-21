create database KiertomaattiDB
use KiertomaattiDB

create table tuote
(
tuoteID int identity(1,1) primary key,
nimi nvarchar(70) not null,
kuvaus nvarchar(255),
lkm int check(lkm>0 and lkm <99),
paivays datetime,
latitude decimal (10,6),
longitude decimal (10,6),
kuva varbinary(max),
blobstorageLinkki nvarchar(255),
kayttajaID int,
itsetehty bit,
juomat bit,
avaamattomat bit,
hevi bit,
kuivatuotteet bit,
kylmatuotteet bit,
kotitila bit,
herkut bit,
mausteet bit
)

create table kayttaja
(
kayttajaID int identity(1,1) primary key,
kayttajaNimi nvarchar(20) not null,
email nvarchar(255) not null,
salasana nvarchar(255) not null,
salasanaHash nvarchar(255),
salasanaSalt nvarchar(255),
kuvaus nvarchar (255),
puhelinnumero nvarchar(15),
)

--create table tag
--(
--tagID int identity(1,1) primary key,
--tuoteID int,
--itsetehty bit,
--juomat bit,
--avaamattomat bit,
--hevi bit,
--kuivatuotteet bit,
--kylmatuotteet bit,
--kotitila bit,
--herkut bit,
--mausteet bit
--)

--viite-eheydet:
alter table tuote add constraint
	FK_tuote_kayttaja foreign key
	(
	kayttajaID
	) references kayttaja
	(
	kayttajaID
	)

--harjoitusdata
insert into tuote 
(nimi, kuvaus, hevi) values ('tomaatti', 'punainen', 1)

--insert into tag
--(tuoteID, kotitila) values (1, 1)

insert into tuote
(nimi, kuvaus, itsetehty) values ('pullava', 'pullapitko', 1)

--insert into tag
--(tuoteID, itsetehty) values (2, 1)

insert into kayttaja
(kayttajanimi, email, salasana) values ('urho', 'testi@testi.fi', '12345')

select * from tuote join kayttaja on tuote.kayttajaID = kayttaja.kayttajaID

select * from tuote

delete from tuote

insert into tuote
(nimi, kuvaus, hevi) values ('Tomaatteja', 'Kallio, Helsinki', 1)
insert into tuote
(nimi, kuvaus, kotitila) values ('Luomukananmunia', 'Punavuori, Helsinki', 1)
insert into tuote
(nimi, kuvaus, itsetehty) values ('Leivonnaiset', 'Lehtisaari, Helsinki', 1)
insert into tuote
(nimi, kuvaus, mausteet) values ('Mausteita', 'Meilahti, Helsinki', 1)
insert into tuote
(nimi, kuvaus, avaamattomat) values ('Säilykepersikat', 'Tapiola, Espoo', 1)
insert into tuote
(nimi, kuvaus, juomat) values ('Alkoholiton glögi', 'Munkkiniemi, Helsinki', 1)
insert into tuote
(nimi, kuvaus, kuivatuotteet) values ('Vehnäjauhoja', 'Kamppi, Helsinki', 1)
insert into tuote
(nimi, kuvaus, herkut) values ('Suklaamuffinsseja', 'Keilaniemi, Espoo', 1)

delete from tuote where tuoteID=11;