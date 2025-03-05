const animeData = {
    categories: {
        actionAdventure: {
            title: "🔥 Hành động & Phiêu lưu",
            details: {
                Action: "Nhiều cảnh chiến đấu. Ví dụ: Naruto, Attack on Titan",
                Adventure: "Hành trình khám phá thế giới. Ví dụ: One Piece, Hunter x Hunter"
            }
        },
        lifeAndEmotion: {
            title: "🎭 Đời sống & cảm xúc",
            details: {
                SliceOfLife: "Nhẹ nhàng, đời thường. Ví dụ: Clannad, K-On!",
                Drama: "Câu chuyện cảm động. Ví dụ: Your Lie in April",
                Romance: "Tình yêu, cảm xúc. Ví dụ: Toradora!, Horimiya"
            }
        }
    },
    animes: [
        {
            title: "Hunter x Hunter",
            introduction: "Hunter x Hunter kể về Gon Freecss trên hành trình trở thành Hunter.",
            release: {
                manga: "3/3/1998",
                anime: "Bản 1999 (62 tập), bản 2011 (148 tập)"
            },
            genres: ["Action", "Adventure", "Fantasy", "Supernatural", "Shounen"],
            arcs: [
                "Hunter Exam Arc",
                "Heavens Arena Arc",
                "Yorknew City Arc"
            ],
            author: {
                name: "Yoshihiro Togashi",
                dob: "27/4/1966",
                otherWorks: ["Yu Yu Hakusho"]
            },
            characters: [
                "Gon Freecss",
                "Killua Zoldyck",
                "Kurapika"
            ]
        },
        {
            title: "One Piece",
            introduction: "One Piece kể về hành trình của Luffy trở thành Vua Hải Tặc.",
            release: {
                manga: "22/7/1997",
                anime: "20/10/1999 - nay"
            },
            genres: ["Action", "Adventure", "Comedy", "Fantasy", "Shounen"],
            arcs: [
                "East Blue Saga",
                "Alabasta Arc",
                "Dressrosa Arc"
            ],
            author: {
                name: "Eiichiro Oda",
                dob: "1/1/1975",
                otherWorks: ["Wanted!", "Monsters"]
            },
            characters: [
                "Monkey D. Luffy",
                "Roronoa Zoro",
                "Nami"
            ]
        }
    ]
};

export default animeData;
