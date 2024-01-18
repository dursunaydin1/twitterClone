# Twitter Clone Uygulaması

Bu proje, sosyal medya platformu **Twitter**'ın temel özelliklerini içeren basit bir klon uygulamasıdır. Kullanıcılar, tweet gönderme, beğenme, retweetleme, sayfa gezinme ve çıkış yapma gibi temel Twitter işlevselliğini deneyimleyebilirler.

## Sayfalar

### 1. Feed Sayfası

- **Feed** sayfası, kullanıcının ana sayfasını temsil eder.
- Kullanıcının paylaşılan tweet'leri görebileceği ve kendi tweet'lerini oluşturabileceği bir alan içerir.
- **Kod:** [Feed.js](src/pages/Feed.js)

### 2. Giriş / Kayıt Sayfası

- **Auth** sayfası, kullanıcının uygulamaya giriş yapma veya yeni bir hesap oluşturma işlemlerini gerçekleştirebileceği sayfadır.
- _Google_ ile giriş yapma seçeneği bulunmaktadır.
- **Kod:** [Auth.js](src/pages/Auth.js)

### 3. Tweet Oluşturma Formu

- **TweetForm** bileşeni, kullanıcının tweet oluşturmasını sağlar.
- Kullanıcı metin ve isteğe bağlı bir görsel içeren tweet'ler gönderebilir.
- **Kod:** [TweetForm.js](src/components/TweetForm.js)

### 4. Tweet Gönderisi

- **Post** bileşeni, bir tweet gönderisinin görüntüsünü temsil eder.
- Kullanıcı tweet'i beğenebilir ve retweetleyebilir.
- **Kod:** [Post.js](src/components/Post.js)

### 5. Navigasyon Çubuğu

- **Nav** bileşeni, uygulama içindeki farklı bölümlere (sayfalara) geçişi sağlayan bir navigasyon çubuğunu içerir.
- Kullanıcı, ana sayfa, keşfet, bildirimler ve profil sayfalarına erişebilir.
- **Kod:** [Nav.js](src/components/Nav.js)

## Kullanılan Teknolojiler

- _React_: Kullanıcı arayüzü ve bileşen yönetimi için.
- _Firebase_: Kimlik doğrulama ve veritabanı işlemleri için.

## Kurulum

1. Proje dosyalarını bilgisayarınıza klonlayın.
2. _Firebase_ projenizi oluşturun ve konfigürasyon bilgilerinizi `firebaseConfig` nesnesine ekleyin.
3. Projeyi başlatmak için terminalde `npm install` ve `npm start` komutlarını kullanın.

## Netlify Linki

[Netlify Linki](<Netlify Linki>)

## Ön İzleme Gif Linki

![Ön İzleme Gif Linki](src/assets/screen.gif)
