const players = [
  {
    id: 1,
    lastName: "Баранцов",
    name: "Кирило Сергійович",
    position: "Воротар",
    birthDate: "19.09.2003",
    photo: "images/players/Barancow_K.jpg",
  },
  {
    id: 2,
    lastName: "Гехейру Рібейру Дос Сантос",
    name: "Венді",
    position: "Нападник",
    birthDate: "30.03.1998",
    photo: "images/players/Geheiru_R.jpg",
  },
  {
    id: 3,
    lastName: "Гонсалвеш дос Сантос",
    name: "Матеус",
    position: "Нападник",
    birthDate: "18.03.2003",
    photo: "images/players/Gonsalvesh_M.jpg",
  },
  {
    id: 4,
    lastName: "Гоуларт",
    name: "Габріель",
    position: "Півзахисник",
    birthDate: "10.03.2002",
    photo: "images/players/Goulart_G.jpg",
  },
  {
    id: 5,
    lastName: "Де Соуза Фрія Філу",
    name: "Ромаріу",
    position: "Півзахисник",
    birthDate: "20.09.1993",
    photo: "images/players/Romariu.jpg",
  },
  {
    id: 6,
    lastName: "Дебелко",
    name: "Роман Миколайович",
    position: "Нападник",
    birthDate: "08.08.1993",
    photo: "images/players/Debelko_R.jpg",
  },
  {
    id: 7,
    lastName: "Дедяєв",
    name: "Андрій Юрійович",
    position: "Захисник",
    birthDate: "09.11.1994",
    photo: "images/players/Dedyaev_A.jpg",
  },
  {
    id: 8,
    lastName: "Євдокимов",
    name: "Антон Вікторович",
    position: "Півзахисник",
    birthDate: "07.12.1995",
    photo: "images/players/Evdokimov_A.jpg",
  },
  {
    id: 9,
    lastName: "Зозуля",
    name: "Олексій Володимирович",
    position: "Захисник",
    birthDate: "15.04.1992",
    photo: "images/players/Zozulya_O.jpg",
  },
  {
    id: 10,
    lastName: "Казаков",
    name: "Максим Ігорович",
    position: "Півзахисник",
    birthDate: "06.02.1996",
    photo: "images/players/Kazakov_M.jpg",
  },
  {
    id: 11,
    lastName: "Кастро Гонсалез",
    name: "Пабло Рамон",
    position: "Півзахисник",
    birthDate: "07.02.2001",
    photo: "images/players/Kastro_P.jpg",
  },
  {
    id: 12,
    lastName: "Кіреєв",
    name: "Андрій Петрович",
    position: "Півзахисник",
    birthDate: "27.09.2001",
    photo: "images/players/Kireev_A.jpg",
  },
  {
    id: 13,
    lastName: "Козиренко",
    name: "Юрій Сергійович",
    position: "Півзахисник",
    birthDate: "27.11.1999",
    photo: "images/players/Kozirenko_Y.jpg",
  },
  {
    id: 14,
    lastName: "Кононов",
    name: "Микита Валентинович",
    position: "Захисник",
    birthDate: "22.01.2003",
    photo: "images/players/Konov_M.jpg",
  },
  {
    id: 15,
    lastName: "Леснік",
    name: "Сергій Володимирович",
    position: "Нападник",
    birthDate: "27.10.1980",
    photo: "images/players/Lesnik_S.jpg",
  },
  {
    id: 16,
    lastName: "Лук’янчук",
    name: "Павло Олегович",
    position: "Захисник",
    birthDate: "19.05.1996",
    photo: "images/players/Lukyanchuk_P.jpg",
  },
  {
    id: 17,
    lastName: "Мельник",
    name: "Олександр Сергійович",
    position: "Півзахисник",
    birthDate: "10.02.2000",
    photo: "images/players/Melnik_O.jpg",
  },
  {
    id: 18,
    lastName: "Монтейру Да Сілва",
    name: "Педро Акасіу",
    position: "Півзахисник",
    birthDate: "28.06.2002",
    photo: "images/players/Monteiru_P.jpg",
  },
  {
    id: 19,
    lastName: "Селін",
    name: "Євген Сергійович",
    position: "Захисник",
    birthDate: "09.05.1988",
    photo: "images/players/Selin_E.jpg",
  },
  {
    id: 20,
    lastName: "Синьогуб",
    name: "Олег Анатолійович",
    position: "Захисник",
    birthDate: "23.04.1989",
    photo: "images/players/Sinyogub_O.jpg",
  },
  {
    id: 21,
    lastName: "Ситніков",
    name: "Микита Олегович",
    position: "Захисник",
    birthDate: "23.06.2004",
    photo: "images/players/Sitnikov_M.jpg",
  },
  {
    id: 22,
    lastName: "Собослой",
    name: "В’ячеслав Романович",
    position: "Півзахисник",
    birthDate: "02.06.2008",
    photo: "images/players/Sobosloy_V.jpg",
  },
  {
    id: 23,
    lastName: "Співаков",
    name: "Андрій Сергійович",
    position: "Півзахисник",
    birthDate: "15.05.1995",
    photo: "images/players/Spivakov_A.jpg",
  },
  {
    id: 24,
    lastName: "Сьєбен Пагліаріні",
    name: "Матеус",
    position: "Півзахисник",
    birthDate: "17.04.2001",
    photo: "images/players/Syeben_M.jpg",
  },
  {
    id: 25,
    lastName: "Татарков",
    name: "Микита Станіславович",
    position: "Нападник",
    birthDate: "04.01.1995",
    photo: "images/players/Tatarkov_M.jpg",
  },
  {
    id: 26,
    lastName: "Федотов",
    name: "Нікіта Ігорович",
    position: "Воротар",
    birthDate: "27.06.2000",
    photo: "images/players/Fedotov_N.jpg",
  },
  {
    id: 27,
    lastName: "Харченко",
    name: "Матвій Анатолійович",
    position: "Півзахисник",
    birthDate: "18.10.2002",
    photo: "images/players/Harchenko_M.jpg",
  },
  {
    id: 28,
    lastName: "Чеботарьов",
    name: "Віталій Віталійович",
    position: "Воротар",
    birthDate: "07.02.1996",
    photo: "images/players/Chebotaryov_V.jpg",
  },
  {
    id: 29,
    lastName: "Ювхимець",
    name: "Роман Володимирович",
    position: "Півзахисник",
    birthDate: "16.03.2003",
    photo: "images/players/Yuvhimec_R.jpg",
  },
  {
    id: 30,
    lastName: "Юзефович",
    name: "Владислав Андрійович",
    position: "Захисник",
    birthDate: "11.01.1994",
    photo: "images/players/Yuzefovich_V.jpg",
  },
];

export default players;
