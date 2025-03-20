<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Triệu hồi React JS -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        const animeData = [
            {
                title_h1: "Naruto",
                introduction_p: "Naruto là một bộ manga và anime nổi tiếng thuộc thể loại hành động, phiêu lưu, giả tưởng do Masashi Kishimoto sáng tác. Câu chuyện xoay quanh Uzumaki Naruto, một cậu bé mồ côi với ước mơ trở thành Hokage – người lãnh đạo mạnh nhất làng Lá (Konoha). Naruto mang trong mình Cửu Vĩ Hồ Ly (Kurama), điều khiến cậu bị dân làng xa lánh. Dù vậy, nhờ sự kiên trì, tình bạn và nỗ lực không ngừng, cậu dần trở thành một ninja vĩ đại, bảo vệ những người quan trọng đối với mình.",
                releaseInfo_h2: "Thời gian phát hành",
                manga_p: "Manga: Xuất bản lần đầu vào 21/9/1999 trên Weekly Shōnen Jump (Shueisha). Kết thúc vào 10/11/2014, tổng cộng 700 chương.",
                anime_ul: [
                    "Naruto (Phần 1): Phát sóng từ 3/10/2002 – 8/2/2007 (220 tập).",
                    "Naruto Shippuden (Phần 2): Phát sóng từ 15/2/2007 – 23/3/2017 (500 tập).",
                    "Boruto: Naruto Next Generations (Phần hậu truyện): Phát sóng từ 5/4/2017, kể về thế hệ sau của Naruto."
                ],
                genres_h2: "Thể loại",
                genres_ul: ["Hành động (Action)", "Phiêu lưu (Adventure)", "Giả tưởng (Fantasy)", "Siêu nhiên (Supernatural)", "Shounen"],
                arcs_h2: "Các Arc đã ra mắt",
                arcs_ul: [
                    "Naruto (Phần 1 – Lúc nhỏ)",
                    "Làng Lá & Kỳ Thi Chūnin (Giới thiệu nhân vật, kỳ thi ninja cấp trung)",
                    "Cuộc xâm lăng của Làng Cát & Orochimaru (Trận chiến với Hokage đệ Tam)",
                    "Cuộc truy tìm Tsunade (Naruto học được Rasengan, Tsunade trở thành Hokage Đệ Ngũ)",
                    "Sasuke Rời Làng (Naruto vs Sasuke tại Thung lũng Kết Thúc)",
                    "Naruto Shippuden (Phần 2 – Lúc trưởng thành)",
                    "Rescue Gaara Arc (Giải cứu Kazekage Gaara khỏi Akatsuki)",
                    "Sự trở lại của Orochimaru & Sasuke (Naruto tìm kiếm Sasuke, chiến đấu với Orochimaru)",
                    "Cuộc chiến với Hidan & Kakuzu (Shikamaru báo thù cho Asuma)",
                    "Jiraiya vs Pain (Jiraiya hy sinh để khám phá bí mật của Pain)",
                    "Cuộc xâm lược của Pain vào Konoha (Naruto thức tỉnh Hiền Nhân Thuật và đánh bại Pain)",
                    "Hội nghị Ngũ Kage (Sasuke đối đầu với Kage các làng lớn)",
                    "Chiến tranh Ninja lần thứ tư (Trận chiến lớn giữa Liên Minh Ninja & Madara Uchiha)",
                    "Naruto vs Sasuke (Lần cuối) (Trận quyết chiến tại Thung lũng Kết Thúc)",
                    "Kết thúc & Naruto trở thành Hokage",
                    "Boruto: Naruto Next Generations",
                    "Boruto bắt đầu con đường ninja",
                    "Xuất hiện tổ chức Kara & Isshiki Otsutsuki",
                    "Cái chết của Kurama & Naruto mất sức mạnh"
                ],
                author_h2: "Thông tin tác giả",
                author_p: "Tên: Masashi Kishimoto (岸本 斉史)\nNgày sinh: 8/11/1974\nQuê quán: Nhật Bản\nTác phẩm khác: Samurai 8\nĐặc điểm nổi bật: Tạo dựng một thế giới ninja đầy sáng tạo với những kỹ thuật đặc biệt như Rasengan, Chidori, Sharingan, Rinnegan, v.v.",
                characters_h2: "Những nhân vật nổi bật",
                characters_ul: [
                    "Làng Lá – Nhóm 7",
                    "Uzumaki Naruto – Nhân vật chính, sở hữu Cửu Vĩ Hồ Ly, sử dụng Rasengan và Hiền Nhân Thuật.",
                    "Uchiha Sasuke – Thiên tài tộc Uchiha, sở hữu Sharingan, Mangekyou Sharingan, Rinnegan.",
                    "Haruno Sakura – Đệ tử của Tsunade, mạnh về y thuật và sức mạnh thể chất.",
                    "Hatake Kakashi – Thầy của nhóm 7, sở hữu Sharingan và biệt danh \"Ninja Sao Chép\".",
                    "Các Hokage của Làng Lá",
                    "Hokage Đệ Nhất (Hashirama Senju) – Người sáng lập Konoha, sở hữu Mộc Độn.",
                    "Hokage Đệ Nhị (Tobirama Senju) – Em trai Hashirama, sáng tạo ra nhiều nhẫn thuật quan trọng.",
                    "Hokage Đệ Tam (Hiruzen Sarutobi) – Được gọi là \"Vị thần của Ninja\".",
                    "Hokage Đệ Tứ (Minato Namikaze) – Cha của Naruto, nổi danh với biệt danh \"Tia Chớp Vàng\".",
                    "Hokage Đệ Ngũ (Tsunade Senju) – Nữ Hokage đầu tiên, nổi tiếng với sức mạnh thể chất.",
                    "Hokage Đệ Lục (Kakashi Hatake) – Nhẫn giả thiên tài, kế thừa vị trí sau cuộc chiến.",
                    "Hokage Đệ Thất (Naruto Uzumaki) – Nhân vật chính, đạt được ước mơ trở thành Hokage.",
                    "Những nhân vật phản diện mạnh nhất",
                    "Orochimaru – Kẻ thèm khát bất tử, sở hữu nhiều thuật cấm.",
                    "Uchiha Itachi – Anh trai Sasuke, từng là thành viên Akatsuki nhưng thực chất là anh hùng.",
                    "Pain (Nagato) – Lãnh đạo Akatsuki, sở hữu Rinnegan.",
                    "Obito Uchiha – Giả danh Tobi, kẻ khởi xướng Đại Chiến Ninja lần 4.",
                    "Madara Uchiha – Kẻ mạnh nhất tộc Uchiha, muốn tạo thế giới ảo Tsukuyomi Vĩnh Cửu.",
                    "Kaguya Otsutsuki – Trùm cuối của truyện, nữ thần khai sinh chakra."
                ],
                summary_p: "Naruto là một trong những bộ manga/anime thành công nhất lịch sử, với hàng triệu fan trên toàn thế giới. Bạn muốn biết thêm thông tin chi tiết về phần nào không? 🍥🔥"
            },
            {
                title_h1: "One Piece",
                introduction_p: "One Piece là một bộ manga và anime nổi tiếng do Eiichiro Oda sáng tác, thuộc thể loại hành động, phiêu lưu, giả tưởng. Câu chuyện xoay quanh Monkey D. Luffy, một chàng trai trẻ có ước mơ trở thành Vua Hải Tặc. Luffy sở hữu năng lực cao su từ Trái Ác Quỷ Gomu Gomu no Mi (sau này được tiết lộ là Hito Hito no Mi, Model: Nika) và cùng đồng đội trên con tàu Going Merry (sau này là Thousand Sunny) vượt qua nhiều thử thách để tìm kiếm kho báu huyền thoại One Piece.",
                releaseInfo_h2: "Thời gian phát hành",
                manga_p: "Manga: Xuất bản lần đầu vào 22/7/1997 trên Weekly Shōnen Jump (Shueisha).",
                anime_p: "Anime: Phát sóng từ 20/10/1999 đến nay (hiện vẫn đang tiếp tục).",
                genres_h2: "Thể loại",
                genres_ul: ["Hành động (Action)", "Phiêu lưu (Adventure)", "Hài hước (Comedy)", "Giả tưởng (Fantasy)", "Shounen"],
                arcs_h2: "Các Arc đã ra mắt",
                arcs_ul: [
                    "Saga Biển Đông (East Blue Saga)",
                    "Romance Dawn Arc (Khởi đầu)",
                    "Orange Town Arc (Thị trấn Orange)",
                    "Syrup Village Arc (Làng Syrup)",
                    "Baratie Arc (Nhà hàng trên biển)",
                    "Arlong Park Arc (Công viên Arlong)",
                    "Loguetown Arc (Thị trấn Loguetown)",
                    "Saga Đại Hải Trình (Grand Line Saga)",
                    "Reverse Mountain Arc (Núi Đảo Ngược)",
                    "Whisky Peak Arc (Đảo Whisky Peak)",
                    "Little Garden Arc (Hòn đảo nhỏ)",
                    "Drum Island Arc (Đảo Drum)",
                    "Alabasta Arc (Vương quốc Alabasta)",
                    "Các saga lớn tiếp theo",
                    "Sky Island Saga (Đảo trên trời – Skypiea)",
                    "Water 7 Saga (Enies Lobby, cuộc chiến giải cứu Robin)",
                    "Thriller Bark Saga (Bóng ma và Moria)",
                    "Summit War Saga (Marineford, chiến tranh đỉnh cao)",
                    "Fish-Man Island Saga (Đảo Người Cá sau timeskip)",
                    "Dressrosa Saga (Đấu trường Corrida, đánh bại Doflamingo)",
                    "Whole Cake Island Saga (Chiến đấu với Big Mom)",
                    "Wano Country Saga (Kaido và trận đại chiến Wano)",
                    "Final Saga (Giai đoạn cuối cùng của hành trình)"
                ],
                author_h2: "Thông tin tác giả",
                author_p: "Tên: Eiichiro Oda (尾田 栄一郎)\nNgày sinh: 1/1/1975\nQuê quán: Nhật Bản\nCác tác phẩm khác: Wanted!, Monsters\nĐặc điểm nổi bật: Là tác giả nổi tiếng với phong cách sáng tác hài hước, cốt truyện sâu sắc và xây dựng thế giới rộng lớn.",
                characters_h2: "Những nhân vật nổi bật",
                characters_ul: [
                    "Băng Hải Tặc Mũ Rơm",
                    "Monkey D. Luffy – Thuyền trưởng, sử dụng sức mạnh Gomu Gomu no Mi (sau này là Hito Hito no Mi, Model: Nika).",
                    "Roronoa Zoro – Kiếm sĩ ba thanh kiếm, giấc mơ trở thành kiếm sĩ mạnh nhất.",
                    "Nami – Hoa tiêu của băng, chuyên gia điều hướng và thời tiết.",
                    "Usopp – Xạ thủ tài ba, kể chuyện hay nhưng nhát gan.",
                    "Sanji – Đầu bếp kiêm chiến binh dùng chân, sở hữu sức mạnh Diable Jambe.",
                    "Tony Tony Chopper – Bác sĩ kiêm người biến hình nhờ Hito Hito no Mi.",
                    "Nico Robin – Nhà khảo cổ học, sử dụng Hana Hana no Mi.",
                    "Franky – Thợ đóng tàu, người máy nửa người.",
                    "Brook – Nhạc công, kiếm sĩ, người chết sống lại nhờ Yomi Yomi no Mi.",
                    "Jinbei – Người Cá, cao thủ Karate, cựu thành viên Băng Hải Tặc Mặt Trời.",
                    "Những nhân vật quan trọng khác",
                    "Shanks Tóc Đỏ – Một trong Tứ Hoàng, người truyền cảm hứng cho Luffy.",
                    "Marshall D. Teach (Râu Đen) – Kẻ phản bội, sở hữu hai Trái Ác Quỷ.",
                    "Kaido – Tứ Hoàng mạnh mẽ, có năng lực Uo Uo no Mi, Model: Thanh Long.",
                    "Big Mom (Charlotte Linlin) – Nữ hoàng khổng lồ, có sức mạnh từ Soru Soru no Mi.",
                    "Dracule Mihawk – Kiếm sĩ mạnh nhất thế giới.",
                    "Sabo – Anh em kết nghĩa của Luffy, phó thủ lĩnh Quân Cách Mạng.",
                    "Gol D. Roger – Vua Hải Tặc, người duy nhất tìm thấy One Piece.",
                    "Imu – Nhân vật bí ẩn có quyền lực cao nhất thế giới."
                ],
                summary_p: "One Piece là một trong những manga/anime vĩ đại nhất lịch sử, kéo dài hơn 25 năm và vẫn tiếp tục thu hút hàng triệu fan trên toàn thế giới. Bạn muốn biết thêm thông tin chi tiết về phần nào không? 🚢🏴‍☠️"
            },
            {
                title_h1: "Hunter x Hunter",
                introduction_p: "Hunter x Hunter là một bộ manga và anime nổi tiếng thuộc thể loại hành động, phiêu lưu, giả tưởng do Yoshihiro Togashi sáng tác. Câu chuyện xoay quanh nhân vật chính Gon Freecss, một cậu bé có ước mơ trở thành Hunter để tìm kiếm người cha mất tích của mình, Ging Freecss, một Hunter huyền thoại. Trên hành trình của mình, Gon gặp gỡ nhiều người bạn và đối thủ, cùng nhau trải qua những thử thách khắc nghiệt để đạt được mục tiêu của riêng mình.",
                releaseInfo_h2: "Thời gian phát hành",
                manga_p: "Manga: Ra mắt lần đầu vào ngày 3/3/1998, đăng tải trên Weekly Shōnen Jump (Shueisha).",
                anime_ul: [
                    "Bản 1999: Phát sóng từ 16/10/1999 – 31/3/2001 (62 tập).",
                    "Bản 2011: Phát sóng từ 2/10/2011 – 23/9/2014 (148 tập)."
                ],
                genres_h2: "Thể loại",
                genres_ul: ["Hành động (Action)", "Phiêu lưu (Adventure)", "Giả tưởng (Fantasy)", "Siêu nhiên (Supernatural)", "Shounen"],
                arcs_h2: "Các Arc đã ra mắt",
                arcs_ul: [
                    "Hunter Exam Arc (Kỳ thi Hunter)",
                    "Heavens Arena Arc (Đấu trường trên trời)",
                    "Yorknew City Arc (Thành phố Yorknew)",
                    "Greed Island Arc (Hòn đảo Greed)",
                    "Chimera Ant Arc (Kiến Chimera)",
                    "Election Arc (Cuộc bầu cử Chủ tịch Hiệp hội Hunter)",
                    "Dark Continent Expedition Arc (Cuộc thám hiểm Lục địa Đen)",
                    "Succession War Arc (Cuộc chiến kế vị)"
                ],
                author_h2: "Thông tin tác giả",
                author_p: "Tên: Yoshihiro Togashi (冨樫 義博)\nNgày sinh: 27/4/1966\nQuê quán: Nhật Bản\nTác phẩm khác: Yu Yu Hakusho, Level E\nTình trạng sức khỏe: Thường xuyên tạm ngừng sáng tác do vấn đề sức khỏe.",
                characters_h2: "Những nhân vật nổi bật",
                characters_ul: [
                    "Gon Freecss – Nhân vật chính, con trai của Ging, có khả năng Jajanken.",
                    "Killua Zoldyck – Bạn thân của Gon, sát thủ xuất thân từ gia tộc Zoldyck, sử dụng năng lực Điện.",
                    "Kurapika – Thành viên cuối cùng của tộc Kurta, sử dụng Chuỗi xích để trả thù Troupe.",
                    "Leorio Paradinight – Mơ ước trở thành bác sĩ, sử dụng Nen dạng Phóng xạ.",
                    "Hisoka Morow – Một kẻ mạnh thích chiến đấu, sử dụng Bungee Gum.",
                    "Chrollo Lucilfer – Thủ lĩnh của Genei Ryodan (Troupe).",
                    "Meruem – Vua của loài Kiến Chimera, nhân vật phản diện mạnh nhất series."
                ]
            }
        ];

        // Component AnimeItem để hiển thị thông tin mỗi anime
        function AnimeItem({ anime }) {
            return (
                <div className="manga">
                    <h1>{anime.title_h1}</h1>
                    <p>{anime.introduction_p}</p>
                    <h2>{anime.releaseInfo_h2}</h2>
                    <p>{anime.manga_p}</p>
                    {anime.anime_ul ? (
                        <ul>
                            {anime.anime_ul.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{anime.anime_p}</p>
                    )}
                    <h2>{anime.genres_h2}</h2>
                    <ul>
                        {anime.genres_ul.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                    <h2>{anime.arcs_h2}</h2>
                    <ul>
                        {anime.arcs_ul.map((arc, index) => (
                            <li key={index}>{arc}</li>
                        ))}
                    </ul>
                    <h2>{anime.author_h2}</h2>
                    <p>{anime.author_p}</p>
                    <h2>{anime.characters_h2}</h2>
                    <ul>
                        {anime.characters_ul.map((character, index) => (
                            <li key={index}>{character}</li>
                        ))}
                    </ul>
                    {anime.summary_p && <p>{anime.summary_p}</p>}
                </div>
            );
        }

        // Component App để hiển thị tất cả anime
        function App() {
            return (
                <div>
                    {animeData.map((anime, index) => (
                        <AnimeItem key={index} anime={anime} />
                    ))}
                </div>
            );
        }

        // Render App vào #root
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html> 
