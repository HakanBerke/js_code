const users = [
    {
        id: 1,
        firstName: "john ",
        lastName: "DoE  ",
        email: "johndoe@example.com",
        age: 28,
        registered: "2020-03-15",
        city: "New York",
        score: 82.5,
        birthDay: {
            day: 11,
            year: 1990,
            month: "Nisan",
        },
        skills: ["JavaScript", "React", "Node.js"],
        education: {
            degree: "Lisans",
            field: "Bilgisayar Bilimi",
            university: "NYU",
            graduationYear: 2012,
        },
        experience: [
            {
                company: "Teknoloji A.Ş.",
                role: "Frontend Developer",
                years: 3,
            },
            {
                company: "Web Çözümleri",
                role: "Junior Developer",
                years: 2,
            },
        ],
        hobbies: ["Okuma", "Seyahat", "Yüzme"],
    },
    {
        id: 2,
        firstName: "jaNE ",
        lastName: "sMiTH",
        email: "janesmith@example.com",
        age: 22,
        registered: "2021-06-20",
        city: "Los Angeles",
        score: 90.0,
        birthDay: {
            day: 25,
            year: 1998,
            month: "Temmuz",
        },
        skills: ["Python", "Django", "Makine Öğrenimi"],
        education: {
            degree: "Yüksek Lisans",
            field: "Yapay Zeka",
            university: "UCLA",
            graduationYear: 2020,
        },
        experience: [
            {
                company: "AI Yenilikçiler",
                role: "Data Scientist",
                years: 2,
            },
        ],
        hobbies: ["Bisiklet", "Resim"],
    },
    {
        id: 3,
        firstName: " aLice ",
        lastName: "johNson ",
        email: "alicejohnson@example.com",
        age: 35,
        registered: "2018-07-10",
        city: "Chicago",
        score: 77.0,
        birthDay: {
            day: 5,
            year: 1985,
            month: "Mart",
        },
        skills: ["Java", "Spring", "Hibernate"],
        education: {
            degree: "Lisans",
            field: "Yazılım Mühendisliği",
            university: "University of Chicago",
            graduationYear: 2007,
        },
        experience: [
            {
                company: "Kurumsal Çözümler",
                role: "Backend Developer",
                years: 7,
            },
            {
                company: "Yenilikçi Uygulamalar",
                role: "Senior Developer",
                years: 5,
            },
        ],
        hobbies: ["Bahçecilik", "Yemek Yapma"],
    },
    {
        id: 4,
        firstName: "bOb ",
        lastName: "broWn ",
        email: "bobbrown@example.com",
        age: 30,
        registered: "2019-11-05",
        city: "Houston",
        score: 85.0,
        birthDay: {
            day: 17,
            year: 1992,
            month: "Aralık",
        },
        skills: ["C#", ".NET", "Azure"],
        education: {
            degree: "Lisans",
            field: "Bilgi Teknolojisi",
            university: "Texas A&M",
            graduationYear: 2014,
        },
        experience: [
            {
                company: "Bulut Hizmetleri",
                role: "Bulut Mühendisi",
                years: 4,
            },
            {
                company: "BT Çözümleri",
                role: "Sistem Yöneticisi",
                years: 3,
            },
        ],
        hobbies: ["Yürüyüş", "Fotoğrafçılık"],
    },
    {
        id: 5,
        firstName: " mAry annE ",
        lastName: "jAckSon ",
        email: "maryjackson@example.com",
        age: 27,
        registered: "2021-05-15",
        city: "San Francisco",
        score: 88.0,
        birthDay: {
            day: 8,
            year: 1994,
            month: "Mayıs",
        },
        skills: ["HTML", "CSS", "JavaScript"],
        education: {
            degree: "Lisans",
            field: "Web Tasarımı",
            university: "Stanford",
            graduationYear: 2016,
        },
        experience: [
            {
                company: "Web Studio",
                role: "Frontend Developer",
                years: 3,
            },
            {
                company: "Creative Solutions",
                role: "UI Designer",
                years: 2,
            },
        ],
        hobbies: ["Yazma", "Çizim"],
    },
    {
        id: 6,
        firstName: "pETer pArKer ",
        lastName: "smith",
        email: "peterparker@example.com",
        age: 29,
        registered: "2022-02-25",
        city: "New York",
        score: 92.0,
        birthDay: {
            day: 15,
            year: 1993,
            month: "Ocak",
        },
        skills: ["JavaScript", "Vue.js", "Node.js"],
        education: {
            degree: "Lisans",
            field: "Bilgisayar Mühendisliği",
            university: "Columbia University",
            graduationYear: 2015,
        },
        experience: [
            {
                company: "Tech Innovators",
                role: "Full Stack Developer",
                years: 4,
            },
            {
                company: "NextGen Solutions",
                role: "Backend Developer",
                years: 3,
            },
        ],
        hobbies: ["Tırmanma", "Kayak"],
    },
];

const fullName = users.map((user) => {
    const firstName = user.firstName.trim().split(" ").map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(" ")
    const lastName = user.lastName.trim().toUpperCase()
    return firstName + " " + lastName
})

console.log(fullName);
const date = users.map((user) => {
    let ay = user.birthDay.month;
    switch (ay) {
        case "Ocak":
            ay = "01";
            break;
        case "Şubat":
            ay = "02";
            break;
        case "Mart":
            ay = "03";
            break;
        case "Nisan":
            ay = "04";
            break;
        case "Mayıs":
            ay = "05";
            break;
        case "Haziran":
            ay = "06";
            break;
        case "Temmuz":
            ay = "07";
            break;
        case "Ağustos":
            ay = "08";
            break;
        case "Eylül":
            ay = "09";
            break;
        case "Ekim":
            ay = "10";
            break;
        case "Kasım":
            ay = "11";
            break;
        case "Aralık":
            ay = "12";
            break;
        default:
            break;
    }
    return user.birthDay.day + "-" + ay + "-" + user.birthDay.year
})


console.log(date);

const birthInfo = users.map((user, index) => {
    return `${fullName[index]} ${date[index]} tarihinde doğmuştur`;
});

console.log(birthInfo);