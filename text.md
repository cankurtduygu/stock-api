# user model de emailde validate tanimalrken
validate: [
            (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
            "Please fill a valid email address",
        ]
bu sekilde yazabiliyoruz ama 
validate: regex.test(email) bunu yazamiyoruz. Cunku mongoose burda fn istiyor.

# user modelde email de unique: [true, 'There is this email. Email field must be unique.'],
bu sekilde yazmistim ama mongoosse da unique da desteklenmez message kismi o yüzden kaldirmak lazimdi kaldirdim.

# Express 5'te next parametresini yazmasan da async fonksiyondaki hata otomatik iletiliyor. Arka planda Express sarmalıyor zaten. (req, res) yeterli.

## joi paketi kullandik bu projede önce helpers da tanimladi bunu sonra derste hangi cointrollerda kulanacaksa orda kulalndi ama ben her controler da yni seyi yazmak istemiyorum bundan dolayi bir middleware olusturdum sunu unutma controller is mantigini yapmali validasyonu degil.
--> Joi HTTP request doğrulama (Joi = Kapıdaki güvenlik görevlisi)
--> Mongoose Database doğrulama (Mongoose = Kasadaki güvenlik görevlisi)
Kapıdan kaçarsa bile kasada yakalanır.