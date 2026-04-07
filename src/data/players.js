const players = [
  {
    id: 1,
    number: 1,
    lastName: "Баранцов",
    name: "Кирило Сергійович",
    position: "Воротар",
    birthDate: "19.09.2003",
    photo: "images/players/Barantsov.jpg"
  },
  {
    id: 2,
    number: 98,
    lastName: "Гехейру Рібейру Дос Сантос",
    name: "Венді",
    position: "Нападник",
    birthDate: "30.03.1998",
    photo: "images/players/Gehayru_Ribeyru_Dos_Santos.jpg", // TODO: додати фото
  },
  {
    id: 3,
    number: 21,
    lastName: "Гонсалвеш дос Сантос",
    name: "Матеус",
    position: "Півзахисник",
    birthDate: "18.03.2003",
    photo: "images/players/Gonsalvesh_dos_Santos.jpg"
  },
  {
    id: 4,
    number: 47,
    lastName: "Дзюбук",
    name: "Ілля Русланович",
    position: "Півзахисник",
    birthDate: "03.05.2008",
    photo: "images/players/Dzybuk.jpg"
  },
  {
    id: 5,
    number: 11,
    lastName: "Емере",
    name: "Антоній Даніель Чуквебука",
    position: "Півзахисник",
    birthDate: "27.05.2002",
    photo: "images/players/Emere_A.jpg", // TODO: додати фото
  },
  {
    id: 6,
    number: 5,
    lastName: "Євдокимов",
    name: "Антон Вікторович",
    position: "Півзахисник",
    birthDate: "07.12.1995",
    photo: "images/players/Evdokimov.jpg"
  },
  {
    id: 7,
    number: 28,
    lastName: "Жданович",
    name: "Олексій Сергійович",
    position: "Захисник",
    birthDate: "27.09.2003",
    photo: "images/players/Zhdanovich.jpg"
  },
  {
    id: 8,
    number: 9,
    lastName: "Задніпрянець",
    name: "Богдан Дмитрович",
    position: "Півзахисник",
    birthDate: "25.06.2003",
    photo: "images/players/Zadnimpryanets.jpg"
  },
  {
    id: 9,
    number: 14,
    lastName: "Західний",
    name: "Павло Григорович",
    position: "Захисник",
    birthDate: "10.07.2003",
    photo: "images/players/Zahidniy.jpg"
  },
  {
    id: 10,
    number: 73,
    lastName: "Кастро Гонсалез",
    name: "Пабло Рамон",
    position: "Півзахисник",
    birthDate: "07.02.2001",
    photo: "images/players/Castro_Gonsalez.jpg"
  },
  {
    id: 11,
    number: 8,
    lastName: "Кіреєв",
    name: "Андрій Петрович",
    position: "Захисник",
    birthDate: "27.09.2001",
    photo: "images/players/Kiriev.jpg"
  },
  {
    id: 12,
    number: 99,
    lastName: "Ковальов",
    name: "Артем Андрійович",
    position: "Воротар",
    birthDate: "05.02.2008",
    photo: "images/players/Kovalyov.jpg"
  },
  {
    id: 13,
    number: 18,
    lastName: "Лебедєв",
    name: "Сергій Віталійович",
    position: "Півзахисник",
    birthDate: "30.08.2003",
    photo: "images/players/Lebedyev.jpg"
  },
  {
    id: 14,
    number: 87,
    lastName: "Михайленко",
    name: "Дмитро Денисович",
    position: "Півзахисник",
    birthDate: "04.12.2009",
    photo: "images/players/Mikhaylenko_D.jpg", // TODO: додати фото
  },
  {
    id: 15,
    number: 17,
    lastName: "Монтейру Да Сілва",
    name: "Педро Акасіу",
    position: "Півзахисник",
    birthDate: "28.06.2002",
    photo: "images/players/Monteyru_Da_Silva.jpg"
  },
  {
    id: 16,
    number: 38,
    lastName: "Немецков",
    name: "Микита Ігорович",
    position: "Півзахисник",
    birthDate: "19.09.2006",
    photo: "images/players/Nemetskov_M.jpg", // TODO: додати фото
  },
  {
    id: 17,
    number: 15,
    lastName: "Осман",
    name: "Олександр Вікторович",
    position: "Захисник",
    birthDate: "18.04.1996",
    photo: "images/players/Osman_O.jpg", // TODO: додати фото
  },
  {
    id: 18,
    number: 32,
    lastName: "Петько",
    name: "Сергій Юрійович",
    position: "Півзахисник",
    birthDate: "23.01.1994",
    photo: "images/players/Petko_S.jpg", // TODO: додати фото
  },
  {
    id: 19,
    number: 12,
    lastName: "Постемський",
    name: "Олександр Віталійович",
    position: "Воротар",
    birthDate: "10.03.2006",
    photo: "images/players/Postemskiy.jpg"
  },
  {
    id: 20,
    number: 45,
    lastName: "Сабієв",
    name: "Дмитро Олександрович",
    position: "Захисник",
    birthDate: "05.07.2004",
    photo: "images/players/Sabiev.jpg"
  },
  {
    id: 21,
    number: 3,
    lastName: "Сидоренко",
    name: "Данило Павлович",
    position: "Захисник",
    birthDate: "13.01.2003",
    photo: "images/players/Sidorenko.jpg"
  },
  {
    id: 22,
    number: 89,
    lastName: "Синьогуб",
    name: "Олег Анатолійович",
    position: "Захисник",
    birthDate: "19.04.1989",
    photo: "images/players/Sinyogub.jpg"
  },
  {
    id: 23,
    number: 7,
    lastName: "Ситников",
    name: "Микита Олегович",
    position: "Нападник",
    birthDate: "23.06.2004",
    photo: "images/players/Sitnikov.jpg"
  },
  {
    id: 24,
    number: 78,
    lastName: "Сілва Сантос Дос Сантос",
    name: "Венделл",
    position: "Нападник",
    birthDate: "14.02.2004",
    photo: "images/players/Silva_Santos_Dos_Santos.jpg"
  },
  {
    id: 25,
    number: 10,
    lastName: "Сьєбен Пагліаріні",
    name: "Матеус",
    position: "Півзахисник",
    birthDate: "17.04.2001",
    photo: "images/players/Syeben_Pagliarini.jpg"
  },
  {
    id: 26,
    number: 20,
    lastName: "Харченко",
    name: "Матвій Анатолійович",
    position: "Півзахисник",
    birthDate: "18.10.2002",
    photo: "images/players/Harchenko.jpg"
  },
  {
    id: 27,
    number: 97,
    lastName: "Шевчук",
    name: "Олександр Ігорович",
    position: "Півзахисник",
    birthDate: "19.05.2004",
    photo: "images/players/Shevchuk_O.jpg", // TODO: додати фото
  },
  {
    id: 28,
    number: 6,
    lastName: "Ювхимець",
    name: "Роман Володимирович",
    position: "Півзахисник",
    birthDate: "16.03.2003",
    photo: "images/players/Yuvhimetc.jpg"
  }
];

export default players;