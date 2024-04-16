const incidents = require("../entity/busIncidents")

const cars = [
    {
        driverName: "Васильев Алексей Иванович",
        name: "BMW X3",
        tariff: "Комфорт"
    },
    {
        driverName: "Иванов Дмитрий Дмитриевич",
        name: "BMW X4",
        tariff: "Бизнес"
    },
    {
        driverName: "Дмитриенко Владимир Игоревич",
        name: "BMW X5",
        tariff: "Бизнес"
    },
    {
        driverName: "Заяц Татьяна Михайловна",
        name: "BMW X6",
        tariff: "Бизнес"
    },
    {
        driverName: "Великий Артём Васильевич",
        name: "BMW i3",
        tariff: "Бизнес"
    },
    {
        driverName: "Шакель Валерий Дмитриевич",
        name: "BMW 7er",
        tariff: "Комфорт+"
    },
    {
        driverName: "Шалаев Денис Иванович",
        name: "BMW 6er",
        tariff: "Бизнес"
    },
    {
        driverName: "Купцов Евгений Михайлович",
        name: "BMW 5er",
        tariff: "Бизнес"
    },
    {
        driverName: "Долгова Ксения Максимовна",
        name: "BMW 3er",
        tariff: "Комфорт+"
    }
]

const taxiIncidents = [
    {
        name: "Поломка двигателя"
    },
    {
        name: "Поломка АКПП"
    },
    {
        name: "Проблемы с подачей топлива"
    },
    {
        name: "Пробитое колесо"
    },
    {
        name: "ДТП"
    },
    {
        name: "Водитель заснул за рулём"
    }
]

module.exports = {
    cars, taxiIncidents
}