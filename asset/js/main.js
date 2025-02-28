import React from "react";
import ReactDOM from "react-dom";
const HunterXHunterContent = () => {
    return (
        <article>
            <h2>1. Hunter x Hunter</h2>
            <h3>Giới thiệu:</h3>
            <p>
                Hunter x Hunter là một bộ manga và anime nổi tiếng thuộc thể loại hành động, phiêu lưu, giả tưởng do Yoshihiro Togashi sáng tác. Câu chuyện xoay quanh nhân vật chính Gon Freecss, một cậu bé có ước mơ trở thành Hunter để tìm kiếm người cha mất tích của mình, Ging Freecss, một Hunter huyền thoại. Trên hành trình của mình, Gon gặp gỡ nhiều người bạn và đối thủ, cùng nhau trải qua những thử thách khắc nghiệt để đạt được mục tiêu của riêng mình.
            </p>
            <h3>Thời gian phát hành:</h3>
            <p><strong>Manga:</strong> Ra mắt lần đầu vào ngày 3/3/1998, đăng tải trên Weekly Shōnen Jump (Shueisha).</p>
            <p><strong>Anime:</strong> Có hai bản chuyển thể: Bản 1999 (Phát sóng từ 16/10/1999 – 31/3/2001, 62 tập) và bản 2011 (Phát sóng từ 2/10/2011 – 23/9/2014, 148 tập).</p>
            <h3>Thể loại:</h3>
            <p>
                Hành động (Action), Phiêu lưu (Adventure), Giả tưởng (Fantasy), Siêu nhiên (Supernatural), Shounen.
            </p>
            <h3>Các Arc đã ra mắt:</h3>
            <ul>
                <li>Hunter Exam Arc (Kỳ thi Hunter)</li>
                <li>Heavens Arena Arc (Đấu trường trên trời)</li>
                <li>Yorknew City Arc (Thành phố Yorknew)</li>
                <li>Greed Island Arc (Hòn đảo Greed)</li>
                <li>Chimera Ant Arc (Kiến Chimera)</li>
                <li>Election Arc (Cuộc bầu cử Chủ tịch Hiệp hội Hunter)</li>
                <li>Dark Continent Expedition Arc (Cuộc thám hiểm Lục địa Đen)</li>
                <li>Succession War Arc (Cuộc chiến kế vị)</li>
            </ul>
            <h3>Thông tin tác giả:</h3>
            <p>
                Tên: Yoshihiro Togashi (冨樫 義博) | Ngày sinh: 27/4/1966 | Quê quán: Nhật Bản | Tác phẩm khác: Yu Yu Hakusho, Level E | Tình trạng sức khỏe: Thường xuyên tạm ngừng sáng tác do vấn đề sức khỏe.
            </p>
            <h3>Những nhân vật nổi bật:</h3>
            <ul>
                <li>Gon Freecss: Nhân vật chính, con trai của Ging, có khả năng Jajanken.</li>
                <li>Killua Zoldyck: Bạn thân của Gon, sát thủ xuất thân từ gia tộc Zoldyck, sử dụng năng lực Điện.</li>
                <li>Kurapika: Thành viên cuối cùng của tộc Kurta, sử dụng Chuỗi xích để trả thù Troupe.</li>
                <li>Leorio Paradinight: Mơ ước trở thành bác sĩ, sử dụng Nen dạng Phóng xạ.</li>
                <li>Hisoka Morow: Một kẻ mạnh thích chiến đấu, sử dụng Bungee Gum.</li>
                <li>Chrollo Lucilfer: Thủ lĩnh của Genei Ryodan (Troupe).</li>
                <li>Meruem: Vua của loài Kiến Chimera, nhân vật phản diện mạnh nhất series.</li>
            </ul>
        </article>
    );
};

// Đảm bảo DOM đã sẵn sàng
document.getElementById("gioithieu").addEventListener("click", () => {
    const root = ReactDOM.createRoot(document.getElementById("main-content"));
    root.render(<HunterXHunterContent />);
});
