// Örnek sorular (her test türü için)
const questions = {
    straightforward: [
        { 
            question: `1. Acındırırsan arsız, acıktırırsan hırsız olur.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Yetiştirdiğiniz çocuğa çok fazla ilgi verirseniz daha fazlasını ister. Eğer hiç ilgi vermezseniz bu ilgiyi başkalarında arar.", "Bireyin toplumsal sorumluluklarını yerine getirmesi önemlidir. Bu kişi acınacak halde veya açsa bunları yerine getiremez. Bu toplumsal düzeni bozar.", "Kişinin kendine acıması veya maddi sıkıntılar dolayısıyla aç kalması onu topluma uyumsuz bir birey yapar.", "Çocuğunuza insanların sürekli acımasını sağlarsınız bu acınmadan rahatsız olur ve ilgi ister. Eğer insanların ilgisine izin vermezseniz çocuk kötü davranışlara yönelir."],
            answer: 0
        },
        { 
            question: `2. Adamın alacası içinde, hayvanın alacası dışında.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Hayvanlar aralarında kötü huylu olanları uzaklaştırırken insanların arasında kötü huylular da bulunur.", "İnsanlar hayvanların aksine düşündüğünden onları anlamak daha kolaydır.", "Hayvanların niyetleri postlarının rengi gibi görünürdür ancak insan öyle değildir, dışarıdan huyu anlaşılmaz.", "İnsanlar birbirine ne düşündüklerini kolayca iletebilirken hayvanlar bunu yapamaz."],
            answer: 2
        },
        { 
            question: `3. Başını acemi berbere teslim eden cebinden pamuğu eksik etmez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kararlarımızı verirken tecrübeli insanlara danışmalıyız.", "Dış görünüş toplumsal hayatımız için çok önemlidir. Buna gerekli özeni göstermeyenler sonuçlarına razı olmalıdır.", "Hayatta işlerini acemi insanlara verenler sonuçlarına katlanmaya hazır olmalıdır.", "Hayatta insanlar işlerini acemilere vermelidir, böylece acemiler de parlama şansı yakalar."],
            answer: 2
        },
        { 
            question: `4. Bir koltuğa iki karpuz sığmaz.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Olmayacak bir şey için çabalamak boşadır. Bir şey olmayacak gibi görünüyorsa vazgeçmeliyiz.", "Aynı anda çok fazla ağırlık altına girersek kendimize zarar verebiliriz.", "Karpuz gibi şekerli meyveler çok tüketilmesi halinde insanların sağlığına zarar verebilir.", "Aynı zamanda iki büyük işi bir arada yürütmek zordur."],
            answer: 3
        },
        { 
            question: `5. Cins kedi ölüsünü göstermez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İtici kimseler hatalarının belli olmasını istemez.", "Soylu insanlar çok zor durumlarda bile dışarıdan bunun belli olmamasına özen gösterirler.", "Hayvanlar âleminde güçlü hayvanların ölüsünü rastlamak zordur.", "Doğal döngüde ölüler hemen toprağa karıştığından hayvanların cesetleri görülmez."],
            answer: 1
        },
        { 
            question: `6. Cömert ile nekesin harcı birdir.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Eli açık kimseler ile cimri kimselerin harcadığı para sonunda denkleşir.", "Sonradan zenginleşmiş kimseler hayatları boyunca zengin olanlarla aynı şekilde harcarlar.", "Bir insan cömert de olsa cimri de olsa kaderi bellidir.", "Cömertlik ve cimrilik birbirine karıştırılmamalıdır."],
            answer: 0
        },
        { 
            question: `7. Çıra dibi karanlık olur.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar kendi doğrularını diretirlerse olumsuz sonuçlarla karşılaşabilirler.", "İnsanlar kendileri için yaptıkarını başkaları için yapmaktan çekinirler.", "Göz ışığa alıştığından ışık söndükten sonra etraf daha karanlık görünür.", "Bir kimse başkalarına yaptığı yardımı kendi yakınlarına yapmaz."],
            answer: 3
        },
        { 
            question: `8. Dazlayan daza düşer, kel başlı kıza düşer
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Tembel insanlar olumsuz sonuçlarla karşılaşırlar.", "Kararsız insanlar istemedikleri şeylere mahkumlardır.", "Etrafındakileri kıskanan kimseler oldukları durumdan daha kötü durumlarla karşı karşıya gelirler.", "Parasını neye harcayağını çok düşünen insanlar genellikle hiç harcayamazlar."],
            answer: 1
        },
        { 
            question: `9. El elin eşeğini türkü söyleyerek arar.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsan kimseye muhtaç olmamalıdır. Kendi başının çaresine bakmalıdır.", "İnsanlardan yardım istemek sorunlarımızı çözmemizi kolaylaştırır.", "Bir kimsenin sorununu kendisinden başkası çözmeye uğraşmaz.", "Hayvanlar şarkı türkü gibi melodilere karşılık verir. Bu seslere ilgi gösterirler."],
            answer: 2
        },
        { 
            question: `10. Deli deliden, imam ölüden hoşlanır.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar kendisine yarar sağlayacak şeylere yönelir.", "Deliler diğer deliler dışında kimseyle anlaşamaz. Aynı şey imamlar için de geçerlidir.", "İnsanlar kendilerini korkutan şeylere ilgi duyar.", "Korkularımızın üstüne gitmeliyiz böylece onlardan kurtulabiliriz."],
            answer: 0
        },
        { 
            question: `11. Eşeğin canı yanınca attan yörük olur.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar zor durumlarda daha iyi düşünürler ve daha iyi kararlar alırlar.", "İnsanların çok üstüne gidersek bir noktada bize kızıp sinirlenebilirler.", "Korkak bilinen insanlar üstlerine gidilirse beklenmedik şekilde cesur olabilirler.", "Tembel bilinen insanlar onlara dokunan bir durum olduğunda çok çalışkan olabilirler."],
            answer: 3
        },
        { 
            question: `12. Faydasız baş mezara yaraşır.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Düşünmeyen bir beyin ölü bir beyindir.", "Kimseye bir katkısı olmayan insanların ölüden farkı yoktur.", "Akıllı davranmayan insanlar kötü sonuçlarla karşılaşır.", "Topluma katkı sağlamayan bireyler kolay unutulur."],
            answer: 1
        },
        { 
            question: `13. Gökten ne yağar ki yer kabul etmez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Allah'ın kararları mutlaktır ve her insan kaderini yaşar.", "Allah'ın kararları mutlaktır ve her insan kaderini yaşar.", "Büyüklerden gelen hediyeler her zaman kabul edilir.", "Daha alt konumdakiler üst konumdakilerden gelen her şeyi kabul etmek durumundadır."],
            answer: 3
        },
        { 
            question: `14. Gün var yılı besler, yıl var ayı beslemez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar çok kötü günler geçirebildikleri gibi aniden işler yoluna koyulabilir.", "İnsan aç değilse yemeği hiç düşünmez. Aç olduğu zaman aklı hep yemektedir.", "Bazen kurak mevsimler olduğu gibi çok bereketli dönemler de olur.", "İnsanlara kazançları her zaman dengeli gelmez. Zaman zaman değişir."],
            answer: 3
        },
        { 
            question: `15. Hamı tatlı, yetkini acı.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Çocuklar küçükken tatlı olur ama büyüdükçe kalp kırarlar.", "Meyveler çok olgunlaştığında acır. En tatlı meyve yeni olgunlaşmaya başlamış olandır.", "İnsanlarla ilk tanıştığımızda bize karşı çok iyi davranırlar. Bize alıştıkça rahatlayıp bize kötü davrandıkları olur.", "İnsanlarla fazla vakit geçirdiğimizde onlarla anlaşmazlığa düşme ihtimalimizi arttırız. Bu nedenle herkesle kararında zaman geçirmeliyiz."],
            answer: 0
        },
        { 
            question: `16. Helâl kazanç ile pilâv yağlı yenmez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Zengin olan insanlar eski alışkanlıklarını beğenmezler, daha havalı olduklarını düşündükleri şeylere yönelirler.", "İnsan parasını helâl kazanmaya önem gösterirse şansı her zaman yaver gider, kazancı bol olur.", "İnsan ahlak kurallarını terk etmeden zengin olamaz.", "İnsan sadece kendi emeğiyle bir yere gelemez."],
            answer: 2
        },
        { 
            question: `17. Işığını akşamdan önce yakan sabah çırasında yağ bulamaz.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Temkinli insanlar her zaman doğru yolda giderler. Olumsuz durumlardan etkilenmezler.", "Cimri insanlar tüm tutumlarına rağmen eninde sonunda paralarını kaybederler.", "Gerekmedik yerde para harcayan insanlar gerektiğinde parayı bulamazlar.", "Cömert insanlar diğerlerine yardım edeyim derken kendi paralarından olurlar."],
            answer: 2
        },
        { 
            question: `18. İt ürür, kervan yürür.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar liderleri takip etme eğilimindedir.", "Doğru yolda yürüyenleri kimse aşağı çekemez.", "Kendi bildiğini yapan insanlar eninde sonunda başarıya ulaşır.", "İnsanı başarıya götüren her yol meşrudur."],
            answer: 1
        },
        { 
            question: `19. Kalabalıkta eşeğin kuyruğunu kesme, kimi uzun der, kimi kısa.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsan içinde birini rencide edersen sana kötü sonuç olarak dönebilir.", "Herkesin düşüncesi farklıdır herkesten fikir almaya çalışırsak kafamız karışır.", "Herkesin gözü farklı görür bazımıza yakın görünen bazımıza uzak gelir.", "Önemsiz konularda herkesin fikrini almaya çalışan ne yapacağını şaşırır."],
            answer: 3
        },
        { 
            question: `20. Katrandan olmaz şeker, olsa da cinsine çeker.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kendi bildiğimizin peşinden gidersek her zaman olumlu dönüt almayabiliriz", "Kötü soylu şey ve kişi iyiye dönmez. Ona iyi niteliği kazandırmak için ne denli uğraşılırsa uğraşılsın yine aslından bir kötü iz kalır", "İnsan olduğundan farklı biri gibi davranırsa kimliğini kaybeder.", "Etrafımızda kötü insanlar bulunursa biz de eninde sonunda onlara benzeriz."],
            answer: 1
        },
        { 
            question: `21. Lâtife latif gerek.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanların gülmesini istiyorsak şakalarımızın iyi düşünülmüş olması gerekir.", "Sevilmeyen insanların şakasına komik bile olsa gülünmez.", "Şaka yaparken kibarlığı elden bırakmamalıyız.", "Her şakanın altında biraz olsun gerçek yatar."],
            answer: 2
        },
        { 
            question: `22. Meyhaneciden kefil istemişler, bozacıyı göstermiş.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kötü insanlar diğer kötüleri göstererek kendi yaptıklarını  normalleştirirler.", "İnsanlar bir başkasının sorumluluğunu almak istemez. ", "Esnaf arasında komşuluk olsa bile rekabet olur.", "İnsanlar borç aldıkları kimselerden çekinirler ve onlarla iletişimden kaçınırlar."],
            answer: 0
        },
        { 
            question: `23. Niyet hayır, akıbet hayır.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Bir şeyin sonucu kötü olsa bile niyeti iyi ise iyi sayılır.", "Bazı işlerin niyeti iyi olsa da kötü sonuçlanabilir.", "İyi niyetle başlanan iş iyi sonuçlanır.", "Bir işin sonucu iyi bile olsa niyet kötü ise kötü bir işin eseridir."],
            answer: 2
        },
        { 
            question: `24. Onmadık hacıyı deve üstünde yılan sokar.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kişi seyahat ederken başına normalde olmayan şeyler gelebilir.", "Kişi iyi talihli bile olsa bazen başına kötü şeyler gelir.", "İmansız kişinin başına olmadık işler gelir.", "Talihsiz insanın işi rast gitmez."],
            answer: 3
        },
        { 
            question: `25. Ölürse yer beğensin, kalırsa el beğensin.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kız çocukları evlenmezse hayatları kötü etkilenir.", "Çocuklarımızı terbiyeli yetiştirmeliyiz.", "Bazen insan memleketinden ayrılmak durumunda kalabilir.", "Kararlarını düşünmeyen insanlar kötü kararlar verirler."],
            answer: 1
        },
        { 
            question: `26. Ölüsü olan bir gün, delisi olan her gün ağlar.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Sürekli kötü davranan bir kişiye olan tepki arada bir büyük yanlışlıklar yapan birine olan tepkiye kıyasla daha fazladır.", "İnsanlar büyük acılarını daha kolay unuturlar.", "Delirmek ve aklını kaybetmektense ölüm yeğdir.", "Ölümler insanları üzse bile sürekli etrafta olanlar kadar üzemez."],
            answer: 0
        },
        { 
            question: `27. Papaz her gün pilâv yemez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kişi her gün aynı şeyi yemek istemez.", "İnsan zaman zaman değişiklik ister.", "Papazlar gibi din adamlarının garip alışkanlıkları olur.", "Herkesin kendine göre bir rutini vardır. Dışarıdan yargılamak doğru değildir."],
            answer: 1
        },
        { 
            question: `28. Paran ucuz olursa sen pahalı olursun.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Ekonomik açıdan kötü durumda olan insanlar harcamalarına fazladan önem gösterir.", "Cömert insanların etrafı onlardan fayda sağlamak isteyenlerle doludur.", "İnsanlar çok cömert kimselerin yanında kendini kötü hisseder ve onlardan çekinir.", "Cömert insanlar etrafta saygı uyandırır."],
            answer: 3
        },
        { 
            question: `29. Pilâvdan dönenin kaşığı kırılsın.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Bir işten erken dönenler daha büyük olumsuzluklarla yüzleşir.", "Bir işi sonuçlandırmadan bırakmamalıyız.", "Yemeklerin tamamını yemek gelişim açısından çok önemlidir.", "İsraf etmek yanlıştır ve kaçınılmalıdır."],
            answer: 1
        },
        { 
            question: `30. Rüzgârın önüne düşmeyen yorulur.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Fırsat kovalamayıp yaptıkları işi kendi başına yapanlar başarısız olurlar.", "Çalışırken destek istemeyenler başarılı olmakta zorluk çekerler.", "Her işin bir yapış şekli vardır bu şekilde yapmazsak zorlanırız.", "Toplumla birlikte hareket eden kişiler rahat eder."],
            answer: 3
        },
        { 
            question: `31. Şık şık eden nalçadır, iş bitiren akçedir.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Önemli olan maddiyat değil kişinin hüneridir.", "Para gibi pek çok materyal benzer işlevlere sahiptir.", "Değerli nesneye benzemekle yeri tutulmaz.", "Hiçbir şey maddiyattan önemli değildir."],
            answer: 2
        },
        { 
            question: `32. Terziye 'göç' demişler, 'iğnem başımda' demiş.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kendisine gerekli olan şeyler kişiye ağırlık yapmaz.", "Kendisine gerekli olan şeyler kolay taşınır olan kimseler rahat hayatlar sürer.", "İnsana gerekli olan şeyler birkaç önemli eşyadan ibarettir.", "Çok yer değiştiren insanlar bu konuda tecrübeli olduklarından onlara zor gelmez."],
            answer: 0
        },
        { 
            question: `33. Ulular köprü olsa basıp geçme
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Yolları kontrol etmeden geçmek kötü sonuçlara yol açabilir.", "Büyüklerin tecrübelerine her zaman hürmet gösterilmelidir.", "Bir kişi sadece yaş olarak büyük olduğu için bilgili zannedilmemelidir.", "Yaşadıklarımız ve tecrübelerimiz bize hayatta her zaman yardımcı olur."],
            answer: 1
        },
        { 
            question: `34. Üç göç, bir yangının yerini tutar.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Tek mekâna bağlı sıradan yaşam insanlara uygun değildir.", "Bir kötü düşünce etrafındakilerden destek bulursa bir anda büyür ve çok zararlı hale gelir.", "Göçebe hayat insanın yaşam ateşini harekete geçirir.", "Sürekli yer değiştirmenin ciddi zararları vardır."],
            answer: 3
        },
        { 
            question: `35. Üzümün çöpü var, armudun sapı.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Her meyveyi yemenin kendince bir yolu vardır.", "Bazı insanlar memnun olmayı bilmez.", "İyi bakmayı bilene her şey güzel görünür.", "Her kötü davranışa bir bahane bulunur."],
            answer: 1
        },
        { 
            question: `36. Vardığın yer körse sen de gözünü kapa.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlara yapamadıklarını hatırlatmak hoş karşılanmaz.", "Bazen bazı hedeflere ulaşmak için fedakârlıklar yapmak gerekir.", "Etrafımızdaki insanların yanlışlarına bazen göz yummalıyız.", "Çevreye uyum sağlamak durumundayız."],
            answer: 3
        },
        { 
            question: `37. Yar beni ansın bir koz ile, o da çürük çıksın.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar bazen sevdikleri kişilerin gözüne girmeye çalışırken istenmedik durumlara düşebilirler.", "Reklamın iyisi kötüsü olmaz, amaç akılda kalmaktır.", "İnsanlara zaman zaman kendini hatırlatmak unutulmamak için önemlidir.", "Dostun verdiği hediye her zaman değerlidir."],
            answer: 3
        },
        { 
            question: `38. Ziyan olan koyunun kuyruğu yağlı olur.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Gereksiz harcamalar insana en büyük keyfi verir.", "İnsana kaçan fırsat büyük görünür.", "En büyük fırsatlar hep kaçırılan fırsatlardır.", "İnsanlar hep yanlış şeyi küçümserler."],
            answer: 1
        },
        { 
            question: `39. Zengin arabasını dağdan aşırır. züğürt düz ovada yolunu şaşırır.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Zenginler her işten kurtulmayı bilirken yoksullar başarıya ulaşmakta zorlanır.", "Zenginler hiçbir işi kendi yapmadığı için beceriksiz olurken yoksullar her işi becerir.", "Ezelden veri varlıklı olanlar aynı zamanda eğitimli olurken sonradan zegninlik kazananlar eğitim sahibi olmaz.", "Zengin malına kıymet vermezken fakir her türlü malına dikkat eder."],
            answer: 0
        },
        { 
            question: `40. Adam kıtlığında, keçiye Abdurrahman Çelebi derler.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar zor zamanlarda kendilerine öncülük edecek bir lider ararlar.", "Gerekli olan bulunamazsa benzerine razı olunur.", "Doğru insanlar kendini gösteremezse sahne yanlış insanlara kalır.", "Bir işi başarmak için doğru kişi bulunmazsa herkes seferber olur."],
            answer: 1
        },
    ],
    text: [
        { 
            question: `1. Ayşe Hanım’ın oğlu Ahmet, hafif bir hastalık geçiriyordu. Hastalığı birkaç günde geçmesine rağmen annesinin ona olan ilgisini ve komşulara sürekli oğlunun hastalığından bahsetmesini gördükçe iyileştiğini söylemedi ve daha da kötüymüş gibi taklit yaptı. Bunu daha sonradan Ayşe Hanım fark etti. Ahmet bir ay sonra tekrar rahatsızlandığında annesi ona hiç ilgi vermedi ve bir şeyi olmadığını söyledi. Kötüleşen Ahmet kronik hastalığa sahip üst komşusundan ağrı kesicilerini çaldı. Bu haber yayılınca üst komşusuna yaşadıklarını açıklayan Ayşe Hanım’a: ‘‘Acındırırsan arsız, acıktırırsan hırsız olur.’’ dendi. 

Acındırırsan arsız, acıktırırsan hırsız olur.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Yetiştirdiğiniz çocuğa çok fazla ilgi verirseniz daha fazlasını ister. Eğer hiç ilgi vermezseniz bu ilgiyi başkalarında arar.", "Bireyin toplumsal sorumluluklarını yerine getirmesi önemlidir. Bu kişi acınacak halde veya açsa bunları yerine getiremez. Bu toplumsal düzeni bozar.", "Kişinin kendine acıması veya maddi sıkıntılar dolayısıyla aç kalması onu topluma uyumsuz bir birey yapar.", "Çocuğunuza insanların sürekli acımasını sağlarsınız bu acınmadan rahatsız olur ve ilgi ister. Eğer insanların ilgisine izin vermezseniz çocuk kötü davranışlara yönelir."],
            answer: 0
        },
        { 
            question: `2. İnsan vardır fark edilmez süsünden 
               Kimi farksızdır koyun sürüsünden  
               Her gördüğün şekle aman kapılma                                                                                                                               
               İnsan belli olmaz görüntüsünden

Adamın alacası içinde, hayvanın alacası dışında.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Hayvanlar aralarında kötü huylu olanları uzaklaştırırken insanların arasında kötü huylular da bulunur.", "İnsanlar hayvanların aksine düşündüğünden onları anlamak daha kolaydır.", "Hayvanların niyetleri postlarının rengi gibi görünürdür ancak insan öyle değildir, dışarıdan huyu anlaşılmaz.", "İnsanlar birbirine ne düşündüklerini kolayca iletebilirken hayvanlar bunu yapamaz."],
            answer: 2
        },
        { 
            question: `3. Başak grup çalışmasında görev dağılımı yaparken çok çalışmayacağını bildiği bir arkadaşına bir görev verir. Fakat onun sorumsuz olduğunu bildiği için kendisi de verdiği işi ne olur ne olmaz kendisi de yapmıştır. Bu durumdan bir arkadaşına bahsettiğinde arkadaşı ona: ‘’Başını acemi berbere teslim eden cebinden pamuğu eksik etmez.’’ dedi.

Başını acemi berbere teslim eden cebinden pamuğu eksik etmez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kararlarımızı verirken tecrübeli insanlara danışmalıyız.", "Dış görünüş toplumsal hayatımız için çok önemlidir. Buna gerekli özeni göstermeyenler sonuçlarına razı olmalıdır.", "Hayatta işlerini acemi insanlara verenler sonuçlarına katlanmaya hazır olmalıdır.", "Hayatta insanlar işlerini acemilere vermelidir, böylece acemiler de parlama şansı yakalar."],
            answer: 2
        },
        { 
            question: `4. Aynı gün matematik ve kimya sınavı olan Beyza ikisine de aynı akşam çalışmaya kalkıp, ikisine de yeterince çalışamayınca ikisinden de düşük puan almıştır.  Aldığı notları annesine söylediğinde annesi ona: ‘’Bir koltuğa iki karpuz sığmaz’’ der.

Bir koltuğa iki karpuz sığmaz.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Olmayacak bir şey için çabalamak boşadır. Bir şey olmayacak gibi görünüyorsa vazgeçmeliyiz.", "Aynı anda çok fazla ağırlık altına girersek kendimize zarar verebiliriz.", "Karpuz gibi şekerli meyveler çok tüketilmesi halinde insanların sağlığına zarar verebilir.", "Aynı zamanda iki büyük işi bir arada yürütmek zordur."],
            answer: 3
        },
        { 
            question: `5. Ceylin, Can’a ortak bir arkadaşlarının finansal olarak çok zor durumda olduğunu duyduğunu söyler. Can şaşırarak: ’’Daha bu sabah kon bana kocasıyla tatile gideceklerini söylemişti.’’ Bunun üzerine Ceylin, Can’a: ‘’Cins kedi ölüsünü göstermez.’’ dedi.

Cins kedi ölüsünü göstermez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İtici kimseler hatalarının belli olmasını istemez.", "Soylu insanlar çok zor durumlarda bile dışarıdan bunun belli olmamasına özen gösterirler.", "Hayvanlar âleminde güçlü hayvanların ölüsünü rastlamak zordur.", "Doğal döngüde ölüler hemen toprağa karıştığından hayvanların cesetleri görülmez."],
            answer: 1
        },
        { 
            question: `6. Evine yeni bir mobilya alan Cem parasını sakınmayarak bulabildiği en kaliteli olanını almıştır. Aynı zamanda benzer alışveriş yapan cimri komşusu Ceyhun, ucuza getirdiği bir mobilyayı satın alıp kısa sürede kırıldığı için yeniden almak ve tekrar para harcamak zorunda kalmıştır. İşin sonunda ikisinin harcadığı paralar birbirine eşit olmuştur. Apartmandaki kadınlar gün yaparken Cem ve Ceyhun’un eşleri birbirlerine kocalarından yakınıyorlarken. Cem’in kocası Canan der ki: ‘’Cömert ile nekesin harcı birdir.’’

Cömert ile nekesin harcı birdir.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Eli açık kimseler ile cimri kimselerin harcadığı para sonunda denkleşir.", "Sonradan zenginleşmiş kimseler hayatları boyunca zengin olanlarla aynı şekilde harcarlar.", "Bir insan cömert de olsa cimri de olsa kaderi bellidir.", "Cömertlik ve cimrilik birbirine karıştırılmamalıdır."],
            answer: 0
        },
        { 
            question: `7. Etrafındaki insanlara karşı her zaman çok cömert olan Çağrı, çocuğuna doğum gününde bir hediye bile almamaktadır. Çağrı Bey’in karısı Çiğdem, bu durumu arkadaşlarına anlattığında arkadaşları: ’’Nasıl olur? Çağrı bize karşı her zaman çok eli açıktır.’’ der. Bunun ardından Çiğdem Hanım: ‘’Çıra dibi karanlık olur derler.’’ der.

Çıra dibi karanlık olur.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar kendi doğrularını diretirlerse olumsuz sonuçlarla karşılaşabilirler.", "İnsanlar kendileri için yaptıkarını başkaları için yapmaktan çekinirler.", "Göz ışığa alıştığından ışık söndükten sonra etraf daha karanlık görünür.", "Bir kimse başkalarına yaptığı yardımı kendi yakınlarına yapmaz."],
            answer: 3
        },
        { 
            question: `8. Dilara çok uzun zamandır bir mont almak için araştırma yapıyordu. Girmediği mağaza bakmadığı katalog kalmamasına rağmen hala kendine uygun bir mont bulamamıştı. Arkadaşlarının ona: ‘’Bir monta karar ver artık seninle yaşayacak hali yok.’’ demesine aldırmıyordu. Kış bir anda bastırınca montsuz kalan Dilara, hasta olmamak için gördüğü ilk montu almak durumunda kalır. O kadar araştırma yaptıktan sonra beğenmediği bir montu alan Dilara bunu arkadaşına söylediğinde arkadaşı ona: ‘’Dazlayan daza düşer, kel başlı kıza düşer.’’ der.

Dazlayan daza düşer, kel başlı kıza düşer
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Tembel insanlar olumsuz sonuçlarla karşılaşırlar.", "Kararsız insanlar istemedikleri şeylere mahkumlardır.", "Etrafındakileri kıskanan kimseler oldukları durumdan daha kötü durumlarla karşı karşıya gelirler.", "Parasını neye harcayağını çok düşünen insanlar genellikle hiç harcayamazlar."],
            answer: 1
        },
        { 
            question: `9. Sınıfta kitabını kaybeden Ersan arkadaşı Ebrar’dan kitabını aramakta ona yardım etmesini ister. Ebrar sınıfa üstünkörü bir şekilde göz gezdirip Ersan’a bulamadığını söyler. En yakın arkadaşı tarafından kendisine yardım edilmemesi Ersan’ı çok üzer ve öğretmenine bu durumdan bahseder. Öğretmeni Ertan Bey, Ersan’a insanların kendi problemleri olmayan şeyler için çok uğraşmadıklarını ve kendi sorununu kendi çözmesi gerektiğini belirtir ve ona: ‘’El elin eşeğini türkü söyleyerek arar:’’ der.

El elin eşeğini türkü söyleyerek arar.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsan kimseye muhtaç olmamalıdır. Kendi başının çaresine bakmalıdır.", "İnsanlardan yardım istemek sorunlarımızı çözmemizi kolaylaştırır.", "Bir kimsenin sorununu kendisinden başkası çözmeye uğraşmaz.", "Hayvanlar şarkı türkü gibi melodilere karşılık verir. Bu seslere ilgi gösterirler."],
            answer: 2
        },
        { 
            question: `10. Duru ile Deniz iki yakın arkadaştır. İkisi de farklı iş kollarında çalışmaktadırlar. Aynı gün şehirde ikisinin işlerini ilgilendiren farklı fuarlar açılmıştır ve ayrı olarak herkesin kendi işini ilgilendiren fuarlara gitme kararı almışlardır. Bu konuşmaya kulak misafiri olan Dağhan bu kadar yakın iki arkadaşın o günü beraber geçirmemesini çok garip bulur ve bunu onlara söyler. Onlar ise bu durumda garip bir şey olmadığını açıkladıktan sonra: ‘’Deli deliden, imam ölüden hoşlanır.’’ derler.

Deli deliden, imam ölüden hoşlanır.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar kendisine yarar sağlayacak şeylere yönelir.", "Deliler diğer deliler dışında kimseyle anlaşamaz. Aynı şey imamlar için de geçerlidir.", "İnsanlar kendilerini korkutan şeylere ilgi duyar.", "Korkularımızın üstüne gitmeliyiz böylece onlardan kurtulabiliriz."],
            answer: 0
        },
        { 
            question: `11. Ercüment derslerini hiç dinlemeyen ve hiçbir sınavına çalışmayan bir öğrencidir. Böyle bir sene geçirdikten sonra sınıfta kaldığını öğrendiğinde bir sonraki sene günü gününe çalışır ve en çalışkan öğrencileri bile geçip sınıf birincisi olur. Tembel bildikleri Ercüment’in ne kadar çalışkan çıktığını gören arkadaşı bu duruma bir tepki olarak: ‘’Eşeğin canı yanınca attan yörük olurmuş.’’ der. 

Eşeğin canı yanınca attan yörük olur.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar zor durumlarda daha iyi düşünürler ve daha iyi kararlar alırlar.", "İnsanların çok üstüne gidersek bir noktada bize kızıp sinirlenebilirler.", "Korkak bilinen insanlar üstlerine gidilirse beklenmedik şekilde cesur olabilirler.", "Tembel bilinen insanlar onlara dokunan bir durum olduğunda çok çalışkan olabilirler."],
            answer: 3
        },
        { 
            question: `12. Fikriye sınıfta yapılan bir grup projesinde hiçbir işe katkı sağlamaz. Proje bittikten sonra öğretmenin Fikriye’ye sıfır, grup arkadaşlarına yüksek not verir. Bunu fark eden Fikriye bunu öğretmenine söyler. Öğretmeni Fikriye’ye: ‘’Faydasız baş mezara yaraşır’’ der.

Faydasız baş mezara yaraşır.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Düşünmeyen bir beyin ölü bir beyindir.", "Kimseye bir katkısı olmayan insanların ölüden farkı yoktur.", "Akıllı davranmayan insanlar kötü sonuçlarla karşılaşır.", "Topluma katkı sağlamayan bireyler kolay unutulur."],
            answer: 1
        },
        { 
            question: `13. Gürkan arkadaşı Gürcan’ı bir gün bir hediye paketini açarken görür. Hediyenin kimden geldiğini sorup babasından geldiğini öğrendiği zaman Gürcan’ın babasıyla ilişkililerinin çok iyi olmadığını bildiğinden neden kabul ettiğini sorar. Gürcan: ‘’Gökten ne yağar ki yer kabul etmez.’’ cevabını verir. 

Gökten ne yağar ki yer kabul etmez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Allah'ın kararları mutlaktır ve her insan kaderini yaşar.", "Allah'ın kararları mutlaktır ve her insan kaderini yaşar.", "Büyüklerden gelen hediyeler her zaman kabul edilir.", "Daha alt konumdakiler üst konumdakilerden gelen her şeyi kabul etmek durumundadır."],
            answer: 3
        },
        { 
            question: `14. Göktuğ esnaf olan arkadaşı Görkem’i dükkanında ziyaret ettiğinde keyfinin çok yerinde olduğunu fark eder. ‘’Bugün işler güzel gitti herhalde.’’ diyerek ona takılır. Bunun üzerine Görkem işlerin son zamanda çok kötü gitmesine rağmen bugün yaptığı işin şu ana kadar yaptığı tüm işlerden daha büyük olduğunu ve kendini rahatlatacak bir kazanç sağladığını anlatır. Kendisi de daha önce ticaretle uğraşmış olan Göktuğ ona: ‘’ Gün var yılı besler, yıl var ayı beslemez.’’

Gün var yılı besler, yıl var ayı beslemez
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar çok kötü günler geçirebildikleri gibi aniden işler yoluna koyulabilir.", "İnsan aç değilse yemeği hiç düşünmez. Aç olduğu zaman aklı hep yemektedir.", "Bazen kurak mevsimler olduğu gibi çok bereketli dönemler de olur.", "İnsanlara kazançları her zaman dengeli gelmez. Zaman zaman değişir."],
            answer: 3
        },
        { 
            question: `15. Çocukken Hasan annesi ve babasından çok ilgi ve şefkat görür. Büyüdükçe kişiliği değişen ve asabi ve hırçın birine dönüşen Hasan’ın ailesiyle iletişimleri zayıflar ve hep kavga ederler.  Hasan’ın bu durumunu annesi bir komşuya: ‘’Hasan çocukken çok sevimli ve zararsız bir çocuktu ne oldu da böyle oldu hiç anlamadım’’ diyerek yakınır ve komşu bu duruma karşı ‘’Komşum ne derler bilirsin ‘Hamı tatlı, yetkini acı’ ‘’ 

Hamı tatlı, yetkini acı.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Çocuklar küçükken tatlı olur ama büyüdükçe kalp kırarlar.", "Meyveler çok olgunlaştığında acır. En tatlı meyve yeni olgunlaşmaya başlamış olandır.", "İnsanlarla ilk tanıştığımızda bize karşı çok iyi davranırlar. Bize alıştıkça rahatlayıp bize kötü davrandıkları olur.", "İnsanlarla fazla vakit geçirdiğimizde onlarla anlaşmazlığa düşme ihtimalimizi arttırız. Bu nedenle herkesle kararında zaman geçirmeliyiz."],
            answer: 0
        },
        { 
            question: `16. Halil bir gün arkadaşı Hilal’den dürüst bildikleri bir ortak arkadaşlarının tüm zenginliğinin aslında bir dolandırıcılık sayesinde kazandığını öğrenir. O kişinin çok erdemli ve ahlaklı bir insan olduğunu zanneden Halil Hilal’e bu durumu ne kadar garip bulduğunu belirtir. Hilal Halil’e: ‘’ O kadar parayı nasıl kazanacaktı zaten, helâl kazanç ile pilâv yağlı yenmez.’’ der.

Helâl kazanç ile pilâv yağlı yenmez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Zengin olan insanlar eski alışkanlıklarını beğenmezler, daha havalı olduklarını düşündükleri şeylere yönelirler.", "İnsan parasını helâl kazanmaya önem gösterirse şansı her zaman yaver gider, kazancı bol olur.", "İnsan ahlak kurallarını terk etmeden zengin olamaz.", "İnsan sadece kendi emeğiyle bir yere gelemez."],
            answer: 2
        },
        { 
            question: `17. Ilgın yaptığı bir işte şansı yaver gidince çok ciddi bir kazanç sağlar ve bir anda zengin olur. Bu zenginlik ile çok mutlu olan Ilgın parasını durmaksızın harcamaya başlar. Bu yerli yersiz harcamalarının onu eninde sonunda eski haline geri döndüreceği konusunda onu uyaran ailesine kulak asmaz. Ama ailesinin dediği gerçekten olur ve Ilgın kirasını 	ödeyemeyecek duruma düşer. Bunun ardından ailesinden borç istemek zorunda kalır. Daha sonra bu borcu ödemekte zorluk yaşayan Ilgın zenginliğini bir anda kaybetmesinin ne kadar saçma olduğu konusunda insanlara şikâyet eder. Ailesi ise bu duruma: ‘’ Işığını akşamdan önce yakan sabah çırasında yağ bulamaz.’’ der.

Işığını akşamdan önce yakan sabah çırasında yağ bulamaz.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Temkinli insanlar her zaman doğru yolda giderler. Olumsuz durumlardan etkilenmezler.", "Cimri insanlar tüm tutumlarına rağmen eninde sonunda paralarını kaybederler.", "Gerekmedik yerde para harcayan insanlar gerektiğinde parayı bulamazlar.", "Cömert insanlar diğerlerine yardım edeyim derken kendi paralarından olurlar."],
            answer: 2
        },
        { 
            question: `18. İpek arkadaşı İsmail’e hep pastane açma hayalinden bahseder, konu her açıldığında İsmail bunun imkânsız olduğunu, yaparsa başarısız olacağını dile getirir. Birkaç ay sonra İpek’in pastanesi ünlenir ve maddi durumu zaman geçtikçe iyileşir. Bir gün pastanenin önünden İsmail ve bir arkadaşı geçerken İsmail arkadaşına: ‘’Zamanında buranın sahibine bu işin yürümeyeceğini söylemiştim, galiba yanılmışım.’’ der. Arkadaşı da bunun üstüne: ‘’İt ürür, kervan yürür.’’ der	 

İt ürür, kervan yürür.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar liderleri takip etme eğilimindedir.", "Doğru yolda yürüyenleri kimse aşağı çekemez.", "Kendi bildiğini yapan insanlar eninde sonunda başarıya ulaşır.", "İnsanı başarıya götüren her yol meşrudur."],
            answer: 1
        },
        { 
            question: `19. Kemal doğum gününü kutlamak için bir yer seçmek istemektedir. Kendi başına bir türlü karar veremeyince çağıracağı arkadaşlarına tek tek sorar. Tüm gelen cevaplar farklı olduğundan bu sefer bir türlü hiçbir yere karar veremeyen Kemal hiçbir yerden rezervasyon alamaz ve doğum gününü kutlayamaz. Bu yaşadığını annesine anlattığında annesi ona çok önemli olmayan konularda herkese fikrini sormamasının gerektiğini çünkü bunun ancak kafasını karıştıracağını açıklar ve ekler: ‘’Kalabalıkta eşeğin kuyruğunu kesme, kimi uzun der, kimi kısa.’’		

Kalabalıkta eşeğin kuyruğunu kesme, kimi uzun der, kimi kısa.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsan içinde birini rencide edersen sana kötü sonuç olarak dönebilir.", "Herkesin düşüncesi farklıdır herkesten fikir almaya çalışırsak kafamız karışır.", "Herkesin gözü farklı görür bazımıza yakın görünen bazımıza uzak gelir.", "Önemsiz konularda herkesin fikrini almaya çalışan ne yapacağını şaşırır."],
            answer: 3
        },
        { 
            question: `20. Daha önceden yaptığı bir yanlışla bilinen Kâmil artık iyi biri olmaya çalışsa da etrafındakiler ona hep kötü gözle bakarlar. Bir gün meydana tüm mahalleyi toplayıp artık sadece iyilik yapmak istediğini, kötü alışkanlıklarından uzak duracağını duyurur. Mahalledekiler ona inanırlar ve eskisi gibi davranmaya başlarlar. Üstünden bir hafta geçmeden Kamil’in kendine borcunu ödemediğini fark eden esnaf bunu mahalleliye anlatır, onlar da bunun üstüne: ‘’Katrandan olmaz şeker, olsa da cinsine çeker.’’ derler.

Katrandan olmaz şeker, olsa da cinsine çeker.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kendi bildiğimizin peşinden gidersek her zaman olumlu dönüt almayabiliriz", "Kötü soylu şey ve kişi iyiye dönmez. Ona iyi niteliği kazandırmak için ne denli uğraşılırsa uğraşılsın yine aslından bir kötü iz kalır", "İnsan olduğundan farklı biri gibi davranırsa kimliğini kaybeder.", "Etrafımızda kötü insanlar bulunursa biz de eninde sonunda onlara benzeriz."],
            answer: 1
        },
        { 
            question: `21. Levent ile Lütfü bir gün oturmuş konuşuyorlardı. Konuşma esnasında Levent bir şaka yaptı ve bu şakanın ardından Lütfü çok alındı. Onun alındığını sonradan fark eden Levent, yalnızca bir şaka yaptığını ve amacının onu üzmek olmadığını belirtti. Açıklamadan sonra onu affeden Lütfü, Levent’i yaptığı şakalar konusunda daha dikkatli olması konusunda uyardı ve: ‘‘Lâtife latif gerek.’’ dedi.	 

Lâtife latif gerek.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanların gülmesini istiyorsak şakalarımızın iyi düşünülmüş olması gerekir.", "Sevilmeyen insanların şakasına komik bile olsa gülünmez.", "Şaka yaparken kibarlığı elden bırakmamalıyız.", "Her şakanın altında biraz olsun gerçek yatar."],
            answer: 2
        },
        { 
            question: `22. Meltem arkadaşı Mehmet’i sevmesine rağmen sürekli insanlara yalan söylemesinden çok rahatsız oluyordu. Bir gün bu durumu ona belirtmeye karar verdi ve ona bu kadar yalan söylemesinin uygunsuz olduğunu söyledi. Bunun üzerine Mehmet: ‘’En azından Müslüm gibi sürekli insanlarla kavgaya tutuşmuyorum.’’ diyerek başka bir arkadaşlarını örnek gösterdi. Demek istediği şeyin tam olarak iletemediğini düşünen Meltem bu yaşadığı konuşmayı babasına anlattığında babası ona: 
‘’Meyhaneciden kefil istemişler, bozacıyı göstermiş.’’ dedi.	

 Meyhaneciden kefil istemişler, bozacıyı göstermiş.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kötü insanlar diğer kötüleri göstererek kendi yaptıklarını  normalleştirirler.", "İnsanlar bir başkasının sorumluluğunu almak istemez. ", "Esnaf arasında komşuluk olsa bile rekabet olur.", "İnsanlar borç aldıkları kimselerden çekinirler ve onlarla iletişimden kaçınırlar."],
            answer: 0
        },
        { 
            question: `23. Nazmi ile Nazım beraber toplumun yararına olacaklarına inandıkları bir proje hazırlamaya başlarlar. İkisi de canla başla çalışmasına rağmen ilerledikçe işleri gözlerini biraz korkutur ve altından kalkamayacaklarını düşünürler. Yine de çalışmayı bırakmazlar ve sonunda projeyi hazırlayıp büyük başarı elde ederler. Topluma büyük bir katkı sağlarlar. Yapım aşamasında yaşadıkları zorluluklardan dolayı yapamayacaklarını düşündüklerini arkadaşları Nihat’a söylediklerinde arkadaşları onlara iyi amaçla yapmaya başladıkları şeylerin sonuçlarının da iyi olacağını söyler ve: ‘’Niyet hayır, akıbet hayır.’’ der.	 

Niyet hayır, akıbet hayır.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Bir şeyin sonucu kötü olsa bile niyeti iyi ise iyi sayılır.", "Bazı işlerin niyeti iyi olsa da kötü sonuçlanabilir.", "İyi niyetle başlanan iş iyi sonuçlanır.", "Bir işin sonucu iyi bile olsa niyet kötü ise kötü bir işin eseridir."],
            answer: 2
        },
        { 
            question: `24. Orhan kötü talihi ile her zaman arkadaşlarına alay konusu olurdu. Hep başına şanssız olaylar gelirdi ve arkadaşları ile bu durum üzerine şakalar yaparlardı. Orhan bir gün kamp yapmaya gider. Kampta ateş yakmak için oduna ihtiyaç duyar ve ağacı kesmek üzere yola çıkar. Kesmek için uygun olduğu bir ağaç bulur ve kesmeye hazırlanır. Tam bu anda ağaca yıldırım düşer ve ağaç yanıp kül olur. Böyle bir şeyin ancak kendi b	aşına gelebileceğini düşünerek sinirleri bozulan Orhan arkadaşlarına bu olayı anlatır. Osman arkadaşının bu durumuna: ‘’Onmadık hacıyı deve üstünde yılan sokar.’’ diyerek cevap verir.	 

Onmadık hacıyı deve üstünde yılan sokar.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kişi seyahat ederken başına normalde olmayan şeyler gelebilir.", "Kişi iyi talihli bile olsa bazen başına kötü şeyler gelir.", "İmansız kişinin başına olmadık işler gelir.", "Talihsiz insanın işi rast gitmez."],
            answer: 3
        },
        { 
            question: `25. Öykü ve Özgür çocuklarını hep en iyi şekilde yetiştirmeye özen göstermektedirler. Her türlü davranışın iyisini kötüsünü anlatırlar ve terbiyeli bir insan olarak yetişmesine çok dikkat ederler.  Bu konunun bu kadar üstüne düşmelerini garip bulan Özge onlara: ‘’Çocukların üstüne bu kadar düşmeyin, bu kadarına da gerek yok’’ demiştir. Öykü ve Özgür buna karşı çıkarak çocuğun terbiyeli olarak yetişmesinin hem gündelik hayatta insanlarla olan ilişkileri için hem de Allah katında önemli olduğunu söyleyerek: ‘’Ölürse yer beğensin, kalırsa el beğensin.’’ derler.	

Ölürse yer beğensin, kalırsa el beğensin.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kız çocukları evlenmezse hayatları kötü etkilenir.", "Çocuklarımızı terbiyeli yetiştirmeliyiz.", "Bazen insan memleketinden ayrılmak durumunda kalabilir.", "Kararlarını düşünmeyen insanlar kötü kararlar verirler."],
            answer: 1
        },
        { 
            question: `26. Özlem ve Ömer’in çok yaramaz, sürekli başına iş açan bir oğlu vardır. Yine bir gün ailesinin onaylamadığı bir davranışta bulunur, bunun üzerine iyice bıkkınlık hisseden Özlem ve Ömer kendi aralarında çocuklarının sürekli problem yaratmasından bahsederken: ‘’Ölüsü olan bir gün, delisi olan her gün ağlar. ’’der.	 

Ölüsü olan bir gün, delisi olan her gün ağlar.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Sürekli kötü davranan bir kişiye olan tepki arada bir büyük yanlışlıklar yapan birine olan tepkiye kıyasla daha fazladır.", "İnsanlar büyük acılarını daha kolay unuturlar.", "Delirmek ve aklını kaybetmektense ölüm yeğdir.", "Ölümler insanları üzse bile sürekli etrafta olanlar kadar üzemez."],
            answer: 0
        },
        { 
            question: `27. Pelin arkadaşı Pınar’dan sürekli matematik ödevinin cevaplarını istemektedir. Pınar kabul edip cevapları Pelin’e verir. Bunun sıkça tekrarlandığını fark eden Pınar, Pelin ondan tekrar ödevin cevaplarını istediğinde ona sitem ederek: ‘’Papaz her gün pilav yemez’’ der.	 

Papaz her gün pilâv yemez.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kişi her gün aynı şeyi yemek istemez.", "İnsan zaman zaman değişiklik ister.", "Papazlar gibi din adamlarının garip alışkanlıkları olur.", "Herkesin kendine göre bir rutini vardır. Dışarıdan yargılamak doğru değildir."],
            answer: 1
        },
        { 
            question: `28. Polat her zaman etrafındaki insanlar tarafından saygı duyulan ve gıpta edilen biriydi. Polat ile ilk defa tanışan Pamir Polat’ın neden bu kadar bilinen biri olduğunu en başta anlayamadı. Bunun ardından Polat’ı daha iyi tanıyan Poyraz’a bu durumun sebebini sordu. Poyraz o gün beraber oturdukları sofrada da hesabı Polat’ın ödediğine dikkat çekerek Polat’ın çok cömert ve eli açık biri olduğunu, saygınlığının bundan geldiğini söyledi. Ardından: ‘’Paran ucuz olursa, sen pahalı olursun.’’ dedi. 

Paran ucuz olursa sen pahalı olursun.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Ekonomik açıdan kötü durumda olan insanlar harcamalarına fazladan önem gösterir.", "Cömert insanların etrafı onlardan fayda sağlamak isteyenlerle doludur.", "İnsanlar çok cömert kimselerin yanında kendini kötü hisseder ve onlardan çekinir.", "Cömert insanlar etrafta saygı uyandırır."],
            answer: 3
        },
        { 
            question: `29. Üniversite sınavında başarıya ulaşmak isteyen Peri gece gündüz demeden ders çalışmaktadır. Bu kadar kendini yorduğu için kızının adına üzülen Annesi ona: ‘’Kızım bu sınavın sonucu senin hayatın değil bu kadar çalışmana gerek yok.’’ dediğinde kararlığını göstermek isteyen Perihan ona: ‘’ Pilâvdan dönenin kaşığı kırılsın.’’ der. 

Pilâvdan dönenin kaşığı kırılsın.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Bir işten erken dönenler daha büyük olumsuzluklarla yüzleşir.", "Bir işi sonuçlandırmadan bırakmamalıyız.", "Yemeklerin tamamını yemek gelişim açısından çok önemlidir.", "İsraf etmek yanlıştır ve kaçınılmalıdır."],
            answer: 1
        },
        { 
            question: `30. Rıfkı’nın bütün arkadaşları memur olup sabit maaşla hayatlarını sürdürürler. Fakat Rıfkı arkadaşları gibi bir hayat sürmek istemeyip ona çok yüksek kazanç getirmeyecek meslek gruplarında rol almayı dener ama hiçbirinde başarılı olamaz. Bu durumunu bir arkadaşına yakınarak anlatan Rıfkı’ya arkadaşı cevap olarak: ‘’ Rüzgârın önüne düşmeyen yorulur’’ der.

Rüzgârın önüne düşmeyen yorulur.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Fırsat kovalamayıp yaptıkları işi kendi başına yapanlar başarısız olurlar.", "Çalışırken destek istemeyenler başarılı olmakta zorluk çekerler.", "Her işin bir yapış şekli vardır bu şekilde yapmazsak zorlanırız.", "Toplumla birlikte hareket eden kişiler rahat eder."],
            answer: 3
        },
        { 
            question: `31. Şeyda babasına bilgisayarının bozulduğunu ve sunum ödevi için bilgisayar gerektiğini söyler. Bunun üzerine babası aynı işlevi göreceğini düşünüp ona bir tablet alır. Şeyda tabletle ödevini yapmaya çalışır fakat sunumu yaptığında öğretmeni ödevini yetersiz bulur. Eve gelip bu durumu sinirle babasına açıklarken: ‘’Şık şık eden nalçadır, iş bitiren akçedir.’’ der. 

Şık şık eden nalçadır, iş bitiren akçedir.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Önemli olan maddiyat değil kişinin hüneridir.", "Para gibi pek çok materyal benzer işlevlere sahiptir.", "Değerli nesneye benzemekle yeri tutulmaz.", "Hiçbir şey maddiyattan önemli değildir."],
            answer: 2
        },
        { 
            question: `32. Tarık bir yazılımcıdır. İşi gereği sürekli yanında bilgisayarını taşır. Bu durumu fark eden arkadaşı Tevfik ‘’Tarık neden sürekli bilgisayarın yanında, ağırlık yapmıyor mu?’’ demiş. Tarık buna binaen insana lazım olan taşımasının zor gelmediğini anlatmak için: ‘’Terziye ‘göç’ demişler, ‘iğnem başımda’ demiş’’ der.     

Terziye 'göç' demişler, 'iğnem başımda' demiş.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Kendisine gerekli olan şeyler kişiye ağırlık yapmaz.", "Kendisine gerekli olan şeyler kolay taşınır olan kimseler rahat hayatlar sürer.", "İnsana gerekli olan şeyler birkaç önemli eşyadan ibarettir.", "Çok yer değiştiren insanlar bu konuda tecrübeli olduklarından onlara zor gelmez."],
            answer: 0
        },
        { 
            question: `33. Umut fakir bir ailede doğmuştur. Kendisi çok çalışıp çabalayarak çok zengin olmuştur ve önemli mevkilere gelmiştir. Bir gün işiyle ilgili yaşadığı bir problemden babasına bahseder. Babası da ona konuyla ilgili tavsiyeler verir. Babasının konu hakkında bir bilgisi olmadığını düşünen Umut onun tavsiyelerini uygulamaz ve kendi bildiğini yapar. Bu işte sonradan başarısız olur ve aslında babasının tavsiyelerinin mantıklı olduğunu fark edip onları yapmadığına pişman olur. Bu durumu arkadaşı Ufuk’a anlattığında Ufuk ona büyüklerin her zaman tecrübeli olduğunu ve bilgilerinin önemsenmesi gerektiğini söyleyip: ’’Ulular köprü olsa basıp geçme.’’ der. 

Ulular köprü olsa basıp geçme
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Yolları kontrol etmeden geçmek kötü sonuçlara yol açabilir.", "Büyüklerin tecrübelerine her zaman hürmet gösterilmelidir.", "Bir kişi sadece yaş olarak büyük olduğu için bilgili zannedilmemelidir.", "Yaşadıklarımız ve tecrübelerimiz bize hayatta her zaman yardımcı olur."],
            answer: 1
        },
        { 
            question: `34. Ümit ailesi yüzünden sürekli taşınmaktadır. Bu aile her taşındıklarında sosyal çevreleri değiştiğinden dolayı Ufuk sosyal olmakta zorlanır, ailesi de sürekli ev tutma masraflarından maddi olarak kötü etkilenir ayrıca ev taşıma esnasında kolilerindeki eşyalardan birkaçını mutlaka kırar, eşyalar kullanılmaz hale gelir. Bundan yakınan ve bu kadar göç etmenin çok zor bir şey olduğunu anlatmak isteyen Ümit, ailesine: ‘’Üç göç, bir yangının yerini tutar’’ der.

Üç göç, bir yangının yerini tutar.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Tek mekâna bağlı sıradan yaşam insanlara uygun değildir.", "Bir kötü düşünce etrafındakilerden destek bulursa bir anda büyür ve çok zararlı hale gelir.", "Göçebe hayat insanın yaşam ateşini harekete geçirir.", "Sürekli yer değiştirmenin ciddi zararları vardır."],
            answer: 3
        },
        { 
            question: `35. Üftade iş arkadaşı Ülkü’nün her proje fikrine karşı gelir ve kötü bir fikir olduğunu belirtir, Ülkü patronuna bu durumdan bahsedince Üftade’nin nasıl biri olduğunu bildiği için patronu Ülkü’ye bunu dert etmemesi için: ‘’Üzümün çöpü var, armudun sapı’’ der. 

Üzümün çöpü var, armudun sapı.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Her meyveyi yemenin kendince bir yolu vardır.", "Bazı insanlar memnun olmayı bilmez.", "İyi bakmayı bilene her şey güzel görünür.", "Her kötü davranışa bir bahane bulunur."],
            answer: 1
        },
        { 
            question: `36. Vahit üniversite için gittiği şehirde yeni arkadaşlar edinir ve yeni bir sosyal çevreye girer. Ancak bu yeni arkadaşları hiç onun bahsettiği konulardan bahseden veya onunla aynı şeyleri düşünen insanlar değildir. Buna rağmen onlarla sosyalleşmekten keyif almaktadır ve o gruba ait olmak istemektedir. Ancak onlara uyum sağlamak için çok çaba sarf etmez ve gittikçe onlarla uzaklaşır. Bu durumu memleketindeki arkadaşlarına anlattıktan sonra Vahit’e bir gruba dahil olmak için onlar gibi olması gerektiğini anlatmak isteyen arkadaşları ona: ‘’Vardığın yer körse sen de gözünü kapa.’’ derler. 

Vardığın yer körse sen de gözünü kapa.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlara yapamadıklarını hatırlatmak hoş karşılanmaz.", "Bazen bazı hedeflere ulaşmak için fedakârlıklar yapmak gerekir.", "Etrafımızdaki insanların yanlışlarına bazen göz yummalıyız.", "Çevreye uyum sağlamak durumundayız."],
            answer: 3
        },
        { 
            question: `37. Yağmur arkadaşının doğum gününde ona yoldan geçerken gördüğü stanttan arkadaşı Yeliz’in sevebileceğini düşündüğü kurmalı bir oyuncak alır. Yeliz oyuncağı çalıştırmayı denediğinde oyuncak bozuk çıkar ve ilerlemez. Yağmur’un bunu görüp üzüldüğünü gören Yeliz onu teselli etmek için ona: ‘’Yar beni ansın bir koz ile, o da çürük çıksın’’ der. 

Yar beni ansın bir koz ile, o da çürük çıksın.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar bazen sevdikleri kişilerin gözüne girmeye çalışırken istenmedik durumlara düşebilirler.", "Reklamın iyisi kötüsü olmaz, amaç akılda kalmaktır.", "İnsanlara zaman zaman kendini hatırlatmak unutulmamak için önemlidir.", "Dostun verdiği hediye her zaman değerlidir."],
            answer: 3
        },
        { 
            question: `38. Ziya iş aramaktadır. Bir gün ona gelen aramayı kaçırdığı için bir işe girme şansını kaybeder. Ondan sonraki hafta kendisi başka bir iş bulur ancak sürekli diğer işi kaçırdığı için arkadaşı Zülfü’ye yakınır. Bu şikayetleri Zülfü çok anlamsız bulmaktadır çünkü Ziya’nın yeni işi kaçırdığı işe göre neredeyse aynı şartlardadır hatta daha iyi bir maaş sunmaktadır. Buna rağmen Zülfü’nün sürekli diğer işi düşünmesini kendi içinde: ‘’Ziyan olan koyunun kuyruğu yağlı olur.’’ diyerek açıklar.

Ziyan olan koyunun kuyruğu yağlı olur.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Gereksiz harcamalar insana en büyük keyfi verir.", "İnsana kaçan fırsat büyük görünür.", "En büyük fırsatlar hep kaçırılan fırsatlardır.", "İnsanlar hep yanlış şeyi küçümserler."],
            answer: 1
        },
        { 
            question: `39. Zeliha bir gün televizyon izlerken zengin biriyle yapılan röportaja denk gelir. Bu kişinin anlattığı olayların hepsi kulağa içinden çıkılması imkânsız gelen durumlardır ancak hep bir şekilde çözüm yolunu bulmuştur. Hayatında kendi yaşadığı problemlerin nasıl ona ciddi sorunlar çıkarttığını ve bunları çözmekte zorlandığını düşünen Zeliha’nın canı sıkılır. Onun bu halini gören annesi Zeliha’ya paranın pek çok derde deva olduğunu söyler ve: ‘’Zengin arabasını dağdan aşırır. Züğürt düz ovada yolunu şaşırır.’’ 

Zengin arabasını dağdan aşırır. züğürt düz ovada yolunu şaşırır.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["Zenginler her işten kurtulmayı bilirken yoksullar başarıya ulaşmakta zorlanır.", "Zenginler hiçbir işi kendi yapmadığı için beceriksiz olurken yoksullar her işi becerir.", "Ezelden veri varlıklı olanlar aynı zamanda eğitimli olurken sonradan zegninlik kazananlar eğitim sahibi olmaz.", "Zengin malına kıymet vermezken fakir her türlü malına dikkat eder."],
            answer: 0
        },
        { 
            question: `40. Adem yeni gitmeye başladığı okulda Arif ile tanışır. Arif herkesin çok saygı duyduğu ve çok erdemli bulduğu bir kimsedir. Ancak Arif ile geçirdiği zaman boyunca Arif’in yalan söylemek ve oynadıkları oyunlarda hile yapmak gibi pek çok kötü huyunun olduğunu fark eder. Buna rağmen insanların ona neden çok saygı duyduğunu kendi içinde düşünürken okuldaki diğer çoğu kişinin Arif’e kıyasla daha fazla kötü şey yaptığını fark eder. Daha sonra bir kitap okurken ‘’Adam kıtlığında, keçiye Abdurrahman Çelebi derler.’’ sözünü gördüğünde bu durum için çok açıklayıcı bulur. 

Adam kıtlığında, keçiye Abdurrahman Çelebi derler.
Bu atasözünün anlamı aşağıdakilerden hangisidir?`, 
            options: ["İnsanlar zor zamanlarda kendilerine öncülük edecek bir lider ararlar.", "Gerekli olan bulunamazsa benzerine razı olunur.", "Doğru insanlar kendini gösteremezse sahne yanlış insanlara kalır.", "Bir işi başarmak için doğru kişi bulunmazsa herkes seferber olur."],
            answer: 1
        },
    ],
    pictures: [
        { 
            question: "1.JPG",
            options: ["Yetiştirdiğiniz çocuğa çok fazla ilgi verirseniz daha fazlasını ister. Eğer hiç ilgi vermezseniz bu ilgiyi başkalarında arar.", "Bireyin toplumsal sorumluluklarını yerine getirmesi önemlidir. Bu kişi acınacak halde veya açsa bunları yerine getiremez. Bu toplumsal düzeni bozar.", "Kişinin kendine acıması veya maddi sıkıntılar dolayısıyla aç kalması onu topluma uyumsuz bir birey yapar.", "Çocuğunuza insanların sürekli acımasını sağlarsınız bu acınmadan rahatsız olur ve ilgi ister. Eğer insanların ilgisine izin vermezseniz çocuk kötü davranışlara yönelir."],
            answer: 0,
            proverb: "Acındırırsan arsız, acıktırırsan hırsız olur."
        },
        { 
            question: "2.JPG",
            options: ["Hayvanlar aralarında kötü huylu olanları uzaklaştırırken insanların arasında kötü huylular da bulunur.", "İnsanlar hayvanların aksine düşündüğünden onları anlamak daha kolaydır.", "Hayvanların niyetleri postlarının rengi gibi görünürdür ancak insan öyle değildir, dışarıdan huyu anlaşılmaz.", "İnsanlar birbirine ne düşündüklerini kolayca iletebilirken hayvanlar bunu yapamaz."],
            answer: 2,
            proverb: "Adamın alacası içinde, hayvanın alacası dışında."
        },
        { 
            question: "3.JPG",
            options: ["Kararlarımızı verirken tecrübeli insanlara danışmalıyız.", "Dış görünüş toplumsal hayatımız için çok önemlidir. Buna gerekli özeni göstermeyenler sonuçlarına razı olmalıdır.", "Hayatta işlerini acemi insanlara verenler sonuçlarına katlanmaya hazır olmalıdır.", "Hayatta insanlar işlerini acemilere vermelidir, böylece acemiler de parlama şansı yakalar."],
            answer: 2,
            proverb: "Başını acemi berbere teslim eden cebinden pamuğu eksik etmez."
        },
        { 
            question: "4.JPG",
            options: ["Olmayacak bir şey için çabalamak boşadır. Bir şey olmayacak gibi görünüyorsa vazgeçmeliyiz.", "Aynı anda çok fazla ağırlık altına girersek kendimize zarar verebiliriz.", "Karpuz gibi şekerli meyveler çok tüketilmesi halinde insanların sağlığına zarar verebilir.", "Aynı zamanda iki büyük işi bir arada yürütmek zordur."],
            answer: 3,
            proverb: "Bir koltuğa iki karpuz sığmaz."
        },
        { 
            question: "5.JPG",
            options: ["İtici kimseler hatalarının belli olmasını istemez.", "Soylu insanlar çok zor durumlarda bile dışarıdan bunun belli olmamasına özen gösterirler.", "Hayvanlar âleminde güçlü hayvanların ölüsünü rastlamak zordur.", "Doğal döngüde ölüler hemen toprağa karıştığından hayvanların cesetleri görülmez."],
            answer: 1,
            proverb: "Cins kedi ölüsünü göstermez."
        },
        { 
            question: "6.JPG",
            options: ["Eli açık kimseler ile cimri kimselerin harcadığı para sonunda denkleşir.", "Sonradan zenginleşmiş kimseler hayatları boyunca zengin olanlarla aynı şekilde harcarlar.", "Bir insan cömert de olsa cimri de olsa kaderi bellidir.", "Cömertlik ve cimrilik birbirine karıştırılmamalıdır."],
            answer: 0,
            proverb: "Cömert ile nekesin harcı birdir."
        },
        { 
            question: "7.JPG",
            options: ["İnsanlar kendi doğrularını diretirlerse olumsuz sonuçlarla karşılaşabilirler.", "İnsanlar kendileri için yaptıkarını başkaları için yapmaktan çekinirler.", "Göz ışığa alıştığından ışık söndükten sonra etraf daha karanlık görünür.", "Bir kimse başkalarına yaptığı yardımı kendi yakınlarına yapmaz."],
            answer: 3,
            proverb: "Çıra dibi karanlık olur."
        },
        { 
            question: "8.JPG",
            options: ["Tembel insanlar olumsuz sonuçlarla karşılaşırlar.", "Kararsız insanlar istemedikleri şeylere mahkumlardır.", "Etrafındakileri kıskanan kimseler oldukları durumdan daha kötü durumlarla karşı karşıya gelirler.", "Parasını neye harcayağını çok düşünen insanlar genellikle hiç harcayamazlar."],
            answer: 1,
            proverb: "Dazlayan daza düşer, kel başlı kıza düşer."
        },
        { 
            question: "9.JPG",
            options: ["İnsan kimseye muhtaç olmamalıdır. Kendi başının çaresine bakmalıdır.", "İnsanlardan yardım istemek sorunlarımızı çözmemizi kolaylaştırır.", "Bir kimsenin sorununu kendisinden başkası çözmeye uğraşmaz.", "Hayvanlar şarkı türkü gibi melodilere karşılık verir. Bu seslere ilgi gösterirler."],
            answer: 2,
            proverb: "El elin eşeğini türkü söyleyerek arar."
        },
        { 
            question: "10.JPG",
            options: ["İnsanlar kendisine yarar sağlayacak şeylere yönelir.", "Deliler diğer deliler dışında kimseyle anlaşamaz. Aynı şey imamlar için de geçerlidir.", "İnsanlar kendilerini korkutan şeylere ilgi duyar.", "Korkularımızın üstüne gitmeliyiz böylece onlardan kurtulabiliriz."],
            answer: 0,
            proverb: "Deli deliden, imam ölüden hoşlanır."
        },
        { 
            question: "11.JPG",
            options: ["İnsanlar zor durumlarda daha iyi düşünürler ve daha iyi kararlar alırlar.", "İnsanların çok üstüne gidersek bir noktada bize kızıp sinirlenebilirler.", "Korkak bilinen insanlar üstlerine gidilirse beklenmedik şekilde cesur olabilirler.", "Tembel bilinen insanlar onlara dokunan bir durum olduğunda çok çalışkan olabilirler."],
            answer: 3,
            proverb: "Eşeğin canı yanınca attan yörük olur."
        },
        { 
            question: "12.JPG",
            options: ["Düşünmeyen bir beyin ölü bir beyindir.", "Kimseye bir katkısı olmayan insanların ölüden farkı yoktur.", "Akıllı davranmayan insanlar kötü sonuçlarla karşılaşır.", "Topluma katkı sağlamayan bireyler kolay unutulur."],
            answer: 1,
            proverb: "Faydasız baş mezara yaraşır."
        },
        { 
            question: "13.JPG",
            options: ["Allah'ın kararları mutlaktır ve her insan kaderini yaşar.", "Allah'ın kararları mutlaktır ve her insan kaderini yaşar.", "Büyüklerden gelen hediyeler her zaman kabul edilir.", "Daha alt konumdakiler üst konumdakilerden gelen her şeyi kabul etmek durumundadır."],
            answer: 3,
            proverb: "Gökten ne yağar ki yer kabul etmez."
        },
        { 
            question: "14.JPG",
            options: ["İnsanlar çok kötü günler geçirebildikleri gibi aniden işler yoluna koyulabilir.", "İnsan aç değilse yemeği hiç düşünmez. Aç olduğu zaman aklı hep yemektedir.", "Bazen kurak mevsimler olduğu gibi çok bereketli dönemler de olur.", "İnsanlara kazançları her zaman dengeli gelmez. Zaman zaman değişir."],
            answer: 3,
            proverb: "Gün var yılı besler, yıl var ayı beslemez."
        },
        { 
            question: "15.JPG",
            options: ["Çocuklar küçükken tatlı olur ama büyüdükçe kalp kırarlar.", "Meyveler çok olgunlaştığında acır. En tatlı meyve yeni olgunlaşmaya başlamış olandır.", "İnsanlarla ilk tanıştığımızda bize karşı çok iyi davranırlar. Bize alıştıkça rahatlayıp bize kötü davrandıkları olur.", "İnsanlarla fazla vakit geçirdiğimizde onlarla anlaşmazlığa düşme ihtimalimizi arttırız. Bu nedenle herkesle kararında zaman geçirmeliyiz."],
            answer: 0,
            proverb: "Hamı tatlı, yetkini acı."
        },
        { 
            question: "16.JPG",
            options: ["Zengin olan insanlar eski alışkanlıklarını beğenmezler, daha havalı olduklarını düşündükleri şeylere yönelirler.", "İnsan parasını helâl kazanmaya önem gösterirse şansı her zaman yaver gider, kazancı bol olur.", "İnsan ahlak kurallarını terk etmeden zengin olamaz.", "İnsan sadece kendi emeğiyle bir yere gelemez."],
            answer: 2,
            proverb: "Helâl kazanç ile pilâv yağlı yenmez."
        },
        { 
            question: "17.JPG",
            options: ["Temkinli insanlar her zaman doğru yolda giderler. Olumsuz durumlardan etkilenmezler.", "Cimri insanlar tüm tutumlarına rağmen eninde sonunda paralarını kaybederler.", "Gerekmedik yerde para harcayan insanlar gerektiğinde parayı bulamazlar.", "Cömert insanlar diğerlerine yardım edeyim derken kendi paralarından olurlar."],
            answer: 2,
            proverb: "Işığını akşamdan önce yakan sabah çırasında yağ bulamaz."
        },
        { 
            question: "18.JPG",
            options: ["İnsanlar liderleri takip etme eğilimindedir.", "Doğru yolda yürüyenleri kimse aşağı çekemez.", "Kendi bildiğini yapan insanlar eninde sonunda başarıya ulaşır.", "İnsanı başarıya götüren her yol meşrudur."],
            answer: 1,
            proverb: "İt ürür, kervan yürür."
        },
        { 
            question: "19.JPG",
            options: ["İnsan içinde birini rencide edersen sana kötü sonuç olarak dönebilir.", "Herkesin düşüncesi farklıdır herkesten fikir almaya çalışırsak kafamız karışır.", "Herkesin gözü farklı görür bazımıza yakın görünen bazımıza uzak gelir.", "Önemsiz konularda herkesin fikrini almaya çalışan ne yapacağını şaşırır."],
            answer: 3,
            proverb: "Kalabalıkta eşeğin kuyruğunu kesme, kimi uzun der, kimi kısa."
        },
        { 
            question: "20.JPG",
            options: ["Kendi bildiğimizin peşinden gidersek her zaman olumlu dönüt almayabiliriz", "Kötü soylu şey ve kişi iyiye dönmez. Ona iyi niteliği kazandırmak için ne denli uğraşılırsa uğraşılsın yine aslından bir kötü iz kalır", "İnsan olduğundan farklı biri gibi davranırsa kimliğini kaybeder.", "Etrafımızda kötü insanlar bulunursa biz de eninde sonunda onlara benzeriz."],
            answer: 1,
            proverb: "Katrandan olmaz şeker, olsa da cinsine çeker."
        },
        { 
            question: "21.JPG",
            options: ["İnsanların gülmesini istiyorsak şakalarımızın iyi düşünülmüş olması gerekir.", "Sevilmeyen insanların şakasına komik bile olsa gülünmez.", "Şaka yaparken kibarlığı elden bırakmamalıyız.", "Her şakanın altında biraz olsun gerçek yatar."],
            answer: 2,
            proverb: "Lâtife latif gerek."
        },
        { 
            question: "22.JPG",
            options: ["Kötü insanlar diğer kötüleri göstererek kendi yaptıklarını  normalleştirirler.", "İnsanlar bir başkasının sorumluluğunu almak istemez. ", "Esnaf arasında komşuluk olsa bile rekabet olur.", "İnsanlar borç aldıkları kimselerden çekinirler ve onlarla iletişimden kaçınırlar."],
            answer: 0,
            proverb: "Meyhaneciden kefil istemişler, bozacıyı göstermiş."
        },
        { 
            question: "23.JPG",
            options: ["Bir şeyin sonucu kötü olsa bile niyeti iyi ise iyi sayılır.", "Bazı işlerin niyeti iyi olsa da kötü sonuçlanabilir.", "İyi niyetle başlanan iş iyi sonuçlanır.", "Bir işin sonucu iyi bile olsa niyet kötü ise kötü bir işin eseridir."],
            answer: 2,
            proverb: "Niyet hayır, akıbet hayır."
        },
        { 
            question: "24.JPG",
            options: ["Kişi seyahat ederken başına normalde olmayan şeyler gelebilir.", "Kişi iyi talihli bile olsa bazen başına kötü şeyler gelir.", "İmansız kişinin başına olmadık işler gelir.", "Talihsiz insanın işi rast gitmez."],
            answer: 3,
            proverb: "Onmadık hacıyı deve üstünde yılan sokar."
        },
        { 
            question: "25.JPG",
            options: ["Kız çocukları evlenmezse hayatları kötü etkilenir.", "Çocuklarımızı terbiyeli yetiştirmeliyiz.", "Bazen insan memleketinden ayrılmak durumunda kalabilir.", "Kararlarını düşünmeyen insanlar kötü kararlar verirler."],
            answer: 1,
            proverb: "Ölürse yer beğensin, kalırsa el beğensin."
        },
        { 
            question: "26.JPG",
            options: ["Sürekli kötü davranan bir kişiye olan tepki arada bir büyük yanlışlıklar yapan birine olan tepkiye kıyasla daha fazladır.", "İnsanlar büyük acılarını daha kolay unuturlar.", "Delirmek ve aklını kaybetmektense ölüm yeğdir.", "Ölümler insanları üzse bile sürekli etrafta olanlar kadar üzemez."],
            answer: 0,
            proverb: "Ölüsü olan bir gün, delisi olan her gün ağlar."
        },
        { 
            question: "27.JPG",
            options: ["Kişi her gün aynı şeyi yemek istemez.", "İnsan zaman zaman değişiklik ister.", "Papazlar gibi din adamlarının garip alışkanlıkları olur.", "Herkesin kendine göre bir rutini vardır. Dışarıdan yargılamak doğru değildir."],
            answer: 1,
            proverb: "Papaz her gün pilâv yemez."
        },
        { 
            question: "28.JPG",
            options: ["Ekonomik açıdan kötü durumda olan insanlar harcamalarına fazladan önem gösterir.", "Cömert insanların etrafı onlardan fayda sağlamak isteyenlerle doludur.", "İnsanlar çok cömert kimselerin yanında kendini kötü hisseder ve onlardan çekinir.", "Cömert insanlar etrafta saygı uyandırır."],
            answer: 3,
            proverb: "Paran ucuz olursa sen pahalı olursun."
        },
        { 
            question: "29.JPG",
            options: ["Bir işten erken dönenler daha büyük olumsuzluklarla yüzleşir.", "Bir işi sonuçlandırmadan bırakmamalıyız.", "Yemeklerin tamamını yemek gelişim açısından çok önemlidir.", "İsraf etmek yanlıştır ve kaçınılmalıdır."],
            answer: 1,
            proverb: "Pilâvdan dönenin kaşığı kırılsın."
        },
        { 
            question: "30.JPG",
            options: ["Fırsat kovalamayıp yaptıkları işi kendi başına yapanlar başarısız olurlar.", "Çalışırken destek istemeyenler başarılı olmakta zorluk çekerler.", "Her işin bir yapış şekli vardır bu şekilde yapmazsak zorlanırız.", "Toplumla birlikte hareket eden kişiler rahat eder."],
            answer: 3,
            proverb: "Rüzgârın önüne düşmeyen yorulur."
        },
        { 
            question: "31.JPG",
            options: ["Önemli olan maddiyat değil kişinin hüneridir.", "Para gibi pek çok materyal benzer işlevlere sahiptir.", "Değerli nesneye benzemekle yeri tutulmaz.", "Hiçbir şey maddiyattan önemli değildir."],
            answer: 2,
            proverb: "Şık şık eden nalçadır, iş bitiren akçedir."
        },
        { 
            question: "32.JPG",
            options: ["Kendisine gerekli olan şeyler kişiye ağırlık yapmaz.", "Kendisine gerekli olan şeyler kolay taşınır olan kimseler rahat hayatlar sürer.", "İnsana gerekli olan şeyler birkaç önemli eşyadan ibarettir.", "Çok yer değiştiren insanlar bu konuda tecrübeli olduklarından onlara zor gelmez."],
            answer: 0,
            proverb: "Terziye 'göç' demişler, 'iğnem başımda' demiş."
        },
        { 
            question: "33.JPG",
            options: ["Yolları kontrol etmeden geçmek kötü sonuçlara yol açabilir.", "Büyüklerin tecrübelerine her zaman hürmet gösterilmelidir.", "Bir kişi sadece yaş olarak büyük olduğu için bilgili zannedilmemelidir.", "Yaşadıklarımız ve tecrübelerimiz bize hayatta her zaman yardımcı olur."],
            answer: 1,
            proverb: "Ulular köprü olsa basıp geçme."
        },
        { 
            question: "34.JPG",
            options: ["Tek mekâna bağlı sıradan yaşam insanlara uygun değildir.", "Bir kötü düşünce etrafındakilerden destek bulursa bir anda büyür ve çok zararlı hale gelir.", "Göçebe hayat insanın yaşam ateşini harekete geçirir.", "Sürekli yer değiştirmenin ciddi zararları vardır."],
            answer: 3,
            proverb: "Üç göç, bir yangının yerini tutar."
        },
        { 
            question: "35.JPG",
            options: ["Her meyveyi yemenin kendince bir yolu vardır.", "Bazı insanlar memnun olmayı bilmez.", "İyi bakmayı bilene her şey güzel görünür.", "Her kötü davranışa bir bahane bulunur."],
            answer: 1,
            proverb: "Üzümün çöpü var, armudun sapı."
        },
        { 
            question: "36.JPG",
            options: ["İnsanlara yapamadıklarını hatırlatmak hoş karşılanmaz.", "Bazen bazı hedeflere ulaşmak için fedakârlıklar yapmak gerekir.", "Etrafımızdaki insanların yanlışlarına bazen göz yummalıyız.", "Çevreye uyum sağlamak durumundayız."],
            answer: 3,
            proverb: "Vardığın yer körse sen de gözünü kapa."
        },
        { 
            question: "37.JPG",
            options: ["İnsanlar bazen sevdikleri kişilerin gözüne girmeye çalışırken istenmedik durumlara düşebilirler.", "Reklamın iyisi kötüsü olmaz, amaç akılda kalmaktır.", "İnsanlara zaman zaman kendini hatırlatmak unutulmamak için önemlidir.", "Dostun verdiği hediye her zaman değerlidir."],
            answer: 3,
            proverb: "Yar beni ansın bir koz ile, o da çürük çıksın."
        },
        { 
            question: "38.JPG",
            options: ["Gereksiz harcamalar insana en büyük keyfi verir.", "İnsana kaçan fırsat büyük görünür.", "En büyük fırsatlar hep kaçırılan fırsatlardır.", "İnsanlar hep yanlış şeyi küçümserler."],
            answer: 1,
            proverb: "Ziyan olan koyunun kuyruğu yağlı olur."
        },
        { 
            question: "39.JPG",
            options: ["Zenginler her işten kurtulmayı bilirken yoksullar başarıya ulaşmakta zorlanır.", "Zenginler hiçbir işi kendi yapmadığı için beceriksiz olurken yoksullar her işi becerir.", "Ezelden veri varlıklı olanlar aynı zamanda eğitimli olurken sonradan zegninlik kazananlar eğitim sahibi olmaz.", "Zengin malına kıymet vermezken fakir her türlü malına dikkat eder."],
            answer: 0,
            proverb: "Zengin arabasını dağdan aşırır. züğürt düz ovada yolunu şaşırır."
        },
        { 
            question: "40.JPG",
            options: ["İnsanlar zor zamanlarda kendilerine öncülük edecek bir lider ararlar.", "Gerekli olan bulunamazsa benzerine razı olunur.", "Doğru insanlar kendini gösteremezse sahne yanlış insanlara kalır.", "Bir işi başarmak için doğru kişi bulunmazsa herkes seferber olur."],
            answer: 1,
            proverb: "Adam kıtlığında, keçiye Abdurrahman Çelebi derler."
        },
    ]
};

function sendToGoogleSheets(data) {
    fetch('https://script.google.com/macros/s/AKfycbxrM4FVn9UEfKUdvgFdxfUmwxm6egv4Vjphfjpn_rP-tdG3Dyi49XSudJzUUGuRH_SZ/exec', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));
}

function submitUserForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('userForm').style.display = 'none';
        document.getElementById('testSelection').style.display = 'block';
    } else {
        alert('Lütfen isim ve e-posta adresinizi girin.');
    }
}

function startTest(testType) {
    currentTest = testType;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('testSelection').style.display = 'none';
    document.querySelector('.container').style.display = 'none';
    displayQuestion();
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('nextButton').style.margin = '0 auto';
}

function displayQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const question = questions[currentTest][currentQuestionIndex];
    
    let questionHTML = `<div class="question-container">`;
    if (currentTest === 'gorselli') {
        questionHTML += `
            <img src="${question.question}" alt="Atasözü Resmi">
            <div style="margin: 15px 0; padding: 10px; background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 4px; color: #18416F;">
                ${question.proverb}
            </div>`;
    } else {
        questionHTML += `<div class="question">${question.question}</div>`;
    }
    questionHTML += `<div class="options">`;
    question.options.forEach((option, index) => {
        questionHTML += `
            <label class="option">
                <input type="radio" name="answer" value="${index}">
                ${option}
            </label>`;
    });
    questionHTML += `</div></div>`;
    
    questionContainer.innerHTML = questionHTML;
    answerSubmitted = false;
}

function submitAnswer() {
    if (answerSubmitted) return;

    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Lütfen bir cevap seçin.");
        return;
    }

    answerSubmitted = true;
    const userAnswerIndex = parseInt(selectedOption.value);
    const correctAnswerIndex = questions[currentTest][currentQuestionIndex].answer;
    
    const data = {
        name: document.getElementById('name').value,
        testType: currentTest,
        score: score,
        questionNumber: currentQuestionIndex + 1,
        selectedAnswer: questions[currentTest][currentQuestionIndex].options[userAnswerIndex],
        correctAnswer: questions[currentTest][currentQuestionIndex].options[correctAnswerIndex]
    };

    sendToGoogleSheets(data);
    
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        const isCorrect = index === correctAnswerIndex;
        const isSelected = index === userAnswerIndex;
        
        option.style.color = isCorrect ? '#4CAF50' : '#F44336';
        option.style.minHeight = '24px';
        option.style.lineHeight = '1.5';
        option.style.fontWeight = '400';
        option.style.margin = '10px 0';
        option.style.padding = '5px 0';
        option.style.display = 'flex';
        option.style.alignItems = 'flex-start';
        option.style.textAlign = 'left';
        option.style.fontStyle = 'normal';
        
        if (isCorrect) {
            option.innerHTML += ' <img src="tick.png" alt="Doğru" class="feedback-icon">';
        } else {
            option.innerHTML += ' <img src="cross.png" alt="Yanlış" class="feedback-icon">';
        }
        
        option.querySelector('input').disabled = true;
        option.querySelector('input').checked = index === userAnswerIndex;
    });
    
    if (userAnswerIndex === correctAnswerIndex) {
        score++;
    }
}

function nextQuestion() {
    if (!answerSubmitted) {
        submitAnswer();
        return;
    }
    
    if (currentQuestionIndex < questions[currentTest].length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        endTest();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function getScoreMessage(score) {
    if (score >= 40) return "Mükemmel skor! Atasözlerine tamamen hakimsin!";
    if (score >= 35) return "Harika! Atasözlerini çok iyi biliyorsun!";
    if (score >= 30) return "Çok iyi! Atasözlerine oldukça hakimsin.";
    if (score >= 25) return "Güzel! Atasözlerini iyi biliyorsun.";
    if (score >= 20) return "Fena değil! Atasözlerine aşinasin.";
    if (score >= 15) return "Ortalama bir performans. Biraz daha çalışman gerekiyor.";
    if (score >= 10) return "Geliştirilmesi gerekiyor. Daha çok pratik yapmalısın.";
    if (score >= 5) return "Zorlandığın görülüyor. Atasözlerini daha çok incelemelisin.";
    return "Atasözleri konusunda desteğe ihtiyacın var. Daha çok çalışmalısın.";
}

function endTest() {
    const questionContainer = document.getElementById('questionContainer');
    const scoreMessage = getScoreMessage(score);
    questionContainer.innerHTML = `
        <h2>Test Tamamlandı!</h2>
        <p>Puanınız: ${score} / ${questions[currentTest].length}</p>
        <p>${scoreMessage}</p>
    `;
    document.getElementById('nextButton').style.display = 'none';
}



function returnToTestSelection() {
    document.querySelector('.container').style.display = 'block';
    document.getElementById('testSelection').style.display = 'block';
    document.getElementById('questionContainer').innerHTML = '';
}
