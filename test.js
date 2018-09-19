$(document).ready(function() {
    var options = $('.test-options div');
    var comment_div = $(".test-comment");

    options.click(function() {
        options.removeClass("active-option");
        $(".example-active").removeClass('example-active');
        hash = $(this);
        hash.addClass("active-option");
    });

    db = {
        1: ["Какая разница между температурой в помещении и температурой наружного воздуха необходима для проведения тепловизионной съемки?", "Температура на улице должна быть в 2 раза меньшей;", "Не меньше 5°С;", "Обследование проводить можно только при условии температуры наружного воздуха <0°С;", 'Согласно нормам ДСТУ Б ЕN 13187:2011 "Теплові характеристики будівель. Якісне виявлення теплових відмов в огороджувальних конструкціях. Інфрачервоний метод" и ДСТУ Б В.2.6-101:2010 "Конструкції будинків і споруд. Метод визначення опору теплопередачі огороджувальних конструкцій", разница температур не должна быть меньше 5°С.', 2],
        2: ["Какой набор приборов и расчётных пакетов необходим для проведения теплоаудита/энергоаудита?", "Достаточно только тепловизора;", "Тепловизор и расчётный пакет;", "Необходим тепловизор, гигрометр, анемометр, люксметр, газоанализатор и расчётный пакет для анализа энергопотребления;", "Для проведения комплексного обследования здания/сооружения необходимо учитывать разные факторы, влияющие на уровень энергоэффективности. Поэтому, для информативного аудита одного тепловизора недостаточно. Что бы получить полную информацию об обследуемом объекте необходимо использовать тепловизор, приборы для определения состояния микроклимата помещения (гигрометр, анемометр, люксметр, газоанализатор) и расчётные пакеты для анализа энергопотребления (ENSI или аналоги).", 3],
        3: ["Через какую часть ограждающей конструкции теряется больше всего тепловой энергии?", "	Стены;", "	Окна;", "	Вентиляция;", "При анализе информации, полученной после аудитов более 500 объектов, можно определить следующие усредненные соотношения теплопотерь: крыша - 10-15%, стены - 20-30%, окна - 15-25%, фундамент - 3-6%, вентиляция - 30-40%.", 2],
        4: ["Какие дефекты и недостатки строительной конструкции можно определить с помощью тепловизора?", '	"Мостики холода", нарушения в швах или стыках между сборными конструкциями, локальные потери тепла, места инфильтрации воздуха;', "	Недостаточная толщина теплоизоляции, потери теплоносителя в трубах, потери тепла через окна;", "	Всё вышеперечисленное;", "Тепловизионное обследование - метод диагностики зданий и сооружений, который, на основании интенсивности инфракрасного излучения, наглядно выявляет и визуализирует такие строительные дефекты, как:", 3],
        5: ["Какой процент стоимости энергоэффективных мероприятий может быть компенсирован?", "До 30%", "До 10%", "До 70%", "По состоянию на 2018 год, с помощью международных, государственных, областных и городских программ финансирования энергоэффективных мероприятий, можно компенсировать до 70% стоимости необходимого оборудования, материалов и работ. Отдельно отметим, что, с помощью механизма ЕСКО, компенсация может достигать 100%.", 3],
    }

    var number = 1;
    var stage = 0;

    $('#test-button').click(function() {
        if (stage == 0) {
            comment_div.text("");
            ans = $(".active-option").attr('value');
            for (var i = 0; i < 3; i++) {
                $(options[i]).addClass('option-false');
            };
            var true_opt = $(options[db[number][5] - 1]);
            true_opt.removeClass('option-false');
            true_opt.addClass('option-true');
            comment_div.text(db[number][4])
            if (number == 4) {
                comment_div.append('<ul><li>недостаточная толщина теплоизоляции;</li><li>локальные потери тепла ("мостики холода");</li><li>нарушения в швах или стыках между сборными конструкциями;</li><li>проблемные места в перекрытиях;</li><li>места инфильтрации воздуха;</li><li>потери теплоносителя в трубах;</li><li>потери тепла через окна или остекленные участки зданий.</li></ul>');
            };
            number++;

            stage = 1;
            console.log(number, "   ", stage);
        } else {
            if (number == 6) {
                $('#test-button').remove();
                opt.remove();
                comment_div.remove();
            } else {
                for (var i = 0; i < 3; i++) {
                    var opt = $(options[i]);
                    opt.removeClass('option-false');
                    opt.removeClass('option-true');
                    opt.removeClass('active-option');
                    opt.text(db[number][i + 1]);
                    $('.test-question').text(db[number][0]);
                    comment_div.text("");
                };
                stage = 0;
            };
        };
    });
});
