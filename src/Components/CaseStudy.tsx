import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Video = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 30,
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderColor: "gray", // Warna border
          borderRadius: 10, // Sudut border
          marginTop: 20,
          marginBottom: 60,
          elevation: 2,
          marginHorizontal: 65,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/learnarticle.jpg")}
            style={{
              width: 350,
              height: 170,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 50,
            }}
          >
            <Text style={{ color: "#32c0cc", fontSize: 15 }}>Case Study</Text>
            <Text style={{ fontSize: 18 }}>
              Improve your customer experience
            </Text>
            <Text style={{ fontStyle: "italic", color: "#a8b8d0" }}>
              Beberapa hari ini dua mereka mi instan, Mie Gaga dan Indomie
              sedang ramai dibahas. Keduanya pun jadi trending di Twitter hari
              ini, Rabu (30/8/2023). Warganet ramai membahas sejarah kedua mi
              instan tersebut karena selama ini mengetahui jika Indomie
              diciptakan oleh pemilik Indofood, Sudono Salim alias Liem Sie Long
              karena perusahaan tersebut kini yang memegang produksi Indomie.
              Namun baru-baru ini beradar kabar jika pengusaha bernama Djajadi
              Djaja merupakan pencipta aslinya yang kini memproduksi Mie Gaga.
              Hal itu ramai dibahas setelah beredar sejumlah video di media
              sosial yang membahas sejatah Indomie dan Mie Gaga.
              HomeLifestyleCulinary Kabar Terkini Mie Gaga yang Viral Setelah
              Disebut Masih Satu Saudara dengan Indomie HenryHenry Diperbarui 30
              Agu 2023, 17:25 WIB Copy Link 18 Ilustrasi Mie Pedas Perbesar Mie
              Gaga 100 Extra Pedas memiliki empat varian dengan tiga level
              kepedasan. Liputan6.com, Jakarta - Beberapa hari ini dua mereka mi
              instan, Mie Gaga dan Indomie sedang ramai dibahas. Keduanya pun
              jadi trending di Twitter hari ini, Rabu (30/8/2023). Warganet
              ramai membahas sejarah kedua mi instan tersebut karena selama ini
              mengetahui jika Indomie diciptakan oleh pemilik Indofood, Sudono
              Salim alias Liem Sie Long karena perusahaan tersebut kini yang
              memegang produksi Indomie. Namun baru-baru ini beradar kabar jika
              pengusaha bernama Djajadi Djaja merupakan pencipta aslinya yang
              kini memproduksi Mie Gaga. Hal itu ramai dibahas setelah beredar
              sejumlah video di media sosial yang membahas sejatah Indomie dan
              Mie Gaga. Enam+02:54VIDEO: Fotografer Spesialis Turis Indonesia di
              New York City Salah satunya adalah akun TikTok @bigalphaid. "Mie
              Gaga ternyata “adeknya” Indomie,” tulis akun tersebut pada 20
              Agusttus 2023. Dalam video berdurasi 1 menit 40 detik itu
              dijelaskan bahwa Djajadi Djaja memulai bisnis mi instan pada 1972
              dengan mendirikan PT Sanmaru Food Manufacturing. Nama Indomie
              mulai populer pada 1984 ketika PT Indofood Interna Corporation,
              perusahaan yang didirikan oleh Djajadi bersama Sudono Salim, alias
              Leim Sie Liong mulai merilis produk mi instan dengan merek
              tersebut. Djajadi adalah pemegang saham mayoritas dengan 57,5
              persen, sedangkan Salim memiliki 42,5 persen saham. Namun, seiring
              berjalannya waktu, kontrol perusahaan tersebut secara perlahan
              berpindah dari Djajadi ke Salim Group. Pada akhirnya, Djajadi
              terpaksa harus meninggalkan perusahaan yang pernah ia bangun.
              Salim Group akhirnya menguasai seluruh perusahaan. Djajadi mencoba
              melawan keputusan ini dan menggugat transaksi penjualan
              perusahaannya beserta merek-mereknya kepada PT Indofood Interna
              Corp. Namun, gugatannya ditolak oleh Pengadilan Negeri Jakarta
              Selatan. Dalam upaya hukum yang berlarut-larut, Djajadi bahkan
              membawa kasus ini hingga ke Mahkamah Agung tapi tetap gagal.
              Djajadi Djaja akhirnya menyerah dan lebih fokus mengurus
              perusahaannya sendiri, yaitu mi instan sendiri melalui PT Jakarana
              Tama yang didirikannya sejak 1993 lalu.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginVertical: 30,
            }}
          >
            <Image
              source={require("../../assets/learn.jpg")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            />
            <View
              style={{
                flexDirection: "column",
                marginVertical: 5,
                paddingRight: 25,
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "gray", paddingLeft: 20 }}>
                  Djajadi Djaja
                </Text>
              </TouchableOpacity>
              <Text style={{ color: "gray", paddingLeft: 20 }}>
                Mar 16, 2020 . 6 min read
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Video;
