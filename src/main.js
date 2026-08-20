import './styles.css';
import { sources, preparation, platform, quiz } from './data.js';
import textbookUrl from '../gt-lich-su-dang-csvn-ban-tuyen-giao-tw.pdf?url';
import timeline1911 from '../assets/generated/timeline-1911-source.webp';
import canVuongImage from '../assets/phongtrao/1.tranh-ve-minh-hoa-phong-trao-can-vương.jpg';
import yenTheImage from '../assets/phongtrao/2_khoi_nghia_yen_the.jpg';
import dongDuImage from '../assets/phongtrao/3_phong_trao_Dong_du.jpg';
import duyTanImage from '../assets/phongtrao/4-phong-trao-duy-tan.webp';
import quocDanDangImage from '../assets/phongtrao/5-VN-Quoc-dan_dang.gif';
import archiveParis1921 from '../assets/generated/archive-paris-1921.webp';
import archiveTours1920 from '../assets/generated/archive-tours-1920.webp';
import archiveThailand1928 from '../assets/generated/archive-thailand-1928.webp';
import conferencePhoto from '../assets/bac-ho-hop-tai-cuu-long.jpeg';
import colonialContextImage from '../assets/generated/colonial-context.webp';
import internationalContextImage from '../assets/generated/international-context-triptych-v1.png';
import leninTheseImage from '../assets/bac-ho-doc-luan-cuong-cua-lenin.png';
import thanhNienImage from '../assets/hoi-viet-nam-cach-mang-thanh-nien.jpg';
import quangChauImage from '../assets/bac-ho-o-quang-chau.webp';
import duongKachMenhImage from '../assets/duongkachmenh.jpg';

const timelineMedia=[
 {url:timeline1911,caption:'TRANH MINH HỌA NGUYỄN TẤT THÀNH RỜI TỔ QUỐC NGÀY 5/6/1911 · NGUỒN: IN KỸ THUẬT SỐ'},
 {url:archiveParis1921,caption:'ẢNH TƯ LIỆU GẦN GIAI ĐOẠN · PARIS, 1921 · NGUỒN: IN KỸ THUẬT SỐ'},
 {url:leninTheseImage,caption:'NGUYỄN ÁI QUỐC ĐỌC LUẬN CƯƠNG CỦA LÊNIN · 7/1920 · NGUỒN: TƯ LIỆU'},
 {url:archiveTours1920,caption:'NGUYỄN ÁI QUỐC TẠI ĐẠI HỘI TOURS · 12/1920 · NGUỒN: IN KỸ THUẬT SỐ'},
 {url:quangChauImage,caption:'ẢNH TƯ LIỆU · NGUYỄN ÁI QUỐC TẠI QUẢNG CHÂU · 1924'},
 {url:thanhNienImage,caption:'TRANH TƯ LIỆU · NGUYỄN ÁI QUỐC GIẢNG BÀI TẠI LỚP HUẤN LUYỆN CÁN BỘ CÁCH MẠNG · QUẢNG CHÂU, 1925'},
 {url:duongKachMenhImage,caption:'ẢNH TƯ LIỆU · BÌA SÁCH ĐƯỜNG KÁCH MỆNH · 1927'},
 {url:archiveThailand1928,caption:'BÁC HỒ (THẦU CHÍN) VÀ CÁC ĐỒNG CHÍ TẠI THÁI LAN, 1928 · TƯ LIỆU/TTXVN'}
];
const patrioticMovements=[
 {name:'Cần Vương',period:'1885–1896',image:canVuongImage,source:'https://dcs.nhandan.vn/ngay-nay-nam-xua/theo-dong-su-kien/khoi-nghia-huong-khe-dinh-cao-cua-phong-trao-can-vuong-678418.html'},
 {name:'Yên Thế',period:'1884–1913',image:yenTheImage,source:'https://vi.wikipedia.org/wiki/Kh%E1%BB%9Fi_ngh%C4%A9a_Y%C3%AAn_Th%E1%BA%BF'},
 {name:'Đông Du',period:'Đầu TK XX',image:dongDuImage,source:'https://baotanglichsu.vn/vi/Articles/3097/14624/phong-trao-djong-du-1905-1908-mot-hinh-thuc-xay-dung-luc-luong-cach-mang-nhung-nam-djau-the-ky-xx.html'},
 {name:'Duy Tân',period:'Đầu TK XX',image:duyTanImage,source:'https://www.dinhnghia.com.vn/phong-trao-duy-tan-muc-dich-y-nghia-han-che-nguyen-nhan-that-bai/'},
 {name:'VN Quốc dân Đảng',period:'1927–1930',image:quocDanDangImage,source:'https://baotanglichsu.vn/vi/Articles/3097/15563/ky-niem-86-nam-thanh-lap-viet-nam-quoc-dan-djang-25-12-1927-25-12-2013.html'}
];
const sourceButton=(id)=>`<button class="source-badge" data-source="${id}"><span>MINH CHỨNG</span><strong>${sources[id].claim}</strong><small>Giáo trình Lịch sử Đảng CSVN · tr. ${sources[id].pages} · Mở nguồn ↗</small></button>`;
const label=(kind='fact')=>`<span class="label ${kind}">${kind==='group'?'PHÂN TÍCH CỦA NHÓM':kind==='interpretation'?'GIẢI THÍCH TỪ GIÁO TRÌNH':'SỰ KIỆN'}</span>`;

function shell(content){return `
  <header class="topbar">
    <a class="brand" href="/">VNR<span>202</span></a><div class="chapter-status" aria-live="polite"><small>ĐANG HỌC</small><span>00 · DẪN NHẬP</span></div>
    <div class="top-actions"><button id="fullscreen-toggle" type="button">Toàn màn hình</button><button id="quiz-open" type="button">Kiểm tra</button></div>
  </header>
  <aside class="rail" aria-label="Tiến trình"><span class="rail-line"><i></i></span>${Array.from({length:9},(_,i)=>`<a href="#scene-${i+1}" aria-label="Cảnh ${i+1}" class="${i===0?'active':''}">${String(i+1).padStart(2,'0')}</a>`).join('')}</aside>
  <nav class="page-nav" aria-label="Chuyển trang"><button class="page-prev" type="button" aria-label="Trang trước">← <span>TRƯỚC</span></button><b>01 / 09</b><button class="page-next" type="button" aria-label="Trang sau"><span>SAU</span> →</button></nav>
  <main id="main">${content}</main>
  <div class="drawer-backdrop" hidden></div><aside class="drawer" aria-label="Chi tiết nguồn" aria-hidden="true"></aside>
  <dialog id="quiz"><button class="dialog-close" aria-label="Đóng">×</button><div id="quiz-body"></div></dialog>
  <div class="key-help">F toàn màn hình · Q kiểm tra</div>`}

function home(){return shell(`
 <section class="scene hero" id="scene-1" data-scene="1">
  <div class="sun-disc" aria-hidden="true"><span>1930</span></div><div class="hero-star" aria-hidden="true">★</div>
  <div class="scene-inner hero-copy"><p class="eyebrow">BÀI HỌC TƯƠNG TÁC · VNR202</p><h1>Vì sao năm <em>1930</em><br>trở thành bước ngoặt?</h1><p class="lede">Từ hơn 70 năm khủng hoảng đường lối đến sự xuất hiện của một chính đảng thống nhất và Cương lĩnh chính trị đầu tiên.</p><div class="learning-route" aria-label="Lộ trình bài học"><span><b>01</b> Nhận diện<br>khủng hoảng</span><i>→</i><span><b>02</b> Theo dõi<br>quá trình chuẩn bị</span><i>→</i><span><b>03</b> Giải thích<br>bước ngoặt 1930</span></div><a class="primary" href="#scene-2">Bắt đầu bài học <span>↓</span></a></div>
  <div class="hero-years"><span><b>1858</b> Pháp xâm lược</span><i></i><span><b>1930</b> Đảng ra đời</span></div>
 </section>
 <section class="scene crisis" id="scene-2" data-scene="2"><div class="scene-inner">
  <div class="section-head"><p class="chapter">01 · KHỦNG HOẢNG</p><h2>Việt Nam không thiếu<br><em>lòng yêu nước.</em></h2><p>Nhưng lòng yêu nước, nếu chưa có một hệ thống dẫn đường, vẫn chưa đủ để tạo ra bước ngoặt.</p></div>
  <div class="failure-line">${patrioticMovements.map(item=>`<article class="movement-card"><a class="movement-image" href="${item.source}" target="_blank" rel="noopener" aria-label="Mở nguồn ảnh ${item.name}"><img src="${item.image}" alt="Hình ảnh minh họa ${item.name}" loading="lazy"></a><div class="movement-copy"><b>${item.period}</b><span>${item.name}</span><a href="${item.source}" target="_blank" rel="noopener">Xem nguồn ↗</a></div></article>`).join('')}</div>
  <div class="question-band"><p>Nếu lòng yêu nước không thiếu, <strong>điều gì còn thiếu?</strong></p><div class="gap-grid">${['Đường lối chính trị đúng đắn','Tổ chức lãnh đạo vững mạnh','Phương pháp đấu tranh thích hợp'].map((x,i)=>`<button class="gap"><b>0${i+1}</b><span>THIẾU</span>${x}</button>`).join('')}</div>${label('group')} ${sourceButton('gaps')}</div>
 </div></section>
 <section class="scene international" id="scene-3" data-scene="3"><div class="scene-inner">
  <header class="international-heading"><div><p class="chapter">02 · BỐI CẢNH QUỐC TẾ</p><h2>Thế giới mở ra<br><em>một con đường mới.</em></h2></div><p>Từ sự bành trướng của chủ nghĩa đế quốc đến Cách mạng Tháng Mười và Quốc tế Cộng sản, phong trào giải phóng dân tộc có thêm một không gian lựa chọn mới.</p></header>
  <figure class="international-art"><img src="${internationalContextImage}" alt="Tranh minh họa bối cảnh quốc tế: sự bành trướng của chủ nghĩa đế quốc, Cách mạng Tháng Mười Nga và Quốc tế Cộng sản."><figcaption>MINH HỌA AI · KHÔNG PHẢI ẢNH TƯ LIỆU</figcaption></figure>
  <div class="international-milestones"><article><b>CUỐI TK XIX</b><strong>Chủ nghĩa đế quốc<br>bành trướng</strong><span>Xâm chiếm, áp bức và nô dịch các dân tộc thuộc địa.</span></article><article><b>1917</b><strong>Cách mạng<br>Tháng Mười Nga</strong><span>Mở ra thời đại mới và cổ vũ các dân tộc bị áp bức.</span></article><article><b>1919–1920</b><strong>Quốc tế Cộng sản<br>và vấn đề thuộc địa</strong><span>Đặt giải phóng dân tộc vào chiến lược cách mạng thế giới.</span></article></div>
  <div class="international-evidence">${label()} ${sourceButton('international')}</div>
 </div></section>
 <section class="scene context" id="scene-4" data-scene="4"><div class="scene-inner">
  <header class="context-heading"><div><p class="chapter">03 · BỐI CẢNH TRONG NƯỚC</p><h2>Một xã hội bị<br><em>biến đổi tận gốc.</em></h2></div><p>Chế độ thuộc địa không chỉ áp đặt quyền cai trị; nó còn làm biến đổi cơ cấu giai cấp và đẩy mâu thuẫn dân tộc ngày càng gay gắt.</p></header>
  <div class="context-stage"><figure class="historical-art context-art"><img src="${colonialContextImage}" alt="Minh họa cổ động về xã hội Việt Nam dưới chế độ thuộc địa: công nhân, nông dân và trí thức xuất hiện trước nhà máy, hầm mỏ và bộ máy cai trị." loading="lazy"><figcaption>MINH HỌA AI · KHÔNG PHẢI ẢNH TƯ LIỆU</figcaption><div class="context-image-label"><small>BỐI CẢNH</small><strong>Việt Nam dưới<br>chế độ thuộc địa</strong></div></figure><div class="cause-map"><div class="cause-root"><small>NGUYÊN NHÂN GỐC</small><strong>CHẾ ĐỘ THUỘC ĐỊA</strong></div><div class="causes"><article><b>01 · CHÍNH TRỊ</b><p>Đàn áp, chính quyền thuộc địa, “chia để trị”.</p></article><article><b>02 · KINH TẾ</b><p>Khai thác tài nguyên, lao động và thị trường.</p></article><article><b>03 · VĂN HÓA — XÃ HỘI</b><p>Chính sách nô dịch và “ngu dân”.</p></article></div><div class="effect"><small>HỆ QUẢ</small><strong>BIẾN ĐỔI CƠ CẤU XÃ HỘI</strong><span>Mâu thuẫn dân tộc ngày càng gay gắt</span></div></div></div>
  <div class="context-summary"><div class="worker-stat"><span>Giai cấp công nhân phát triển</span><b>≈ 10 vạn <small>1913</small></b><i>→</i><b>&gt; 22 vạn <small>cuối 1929</small></b></div><div class="context-evidence">${label()} ${sourceButton('context')}</div></div>
 </div></section>
 <section class="scene preparation" id="scene-5" data-scene="5"><div class="scene-inner">
  <div class="preparation-intro" data-preparation-intro><div class="section-head"><p class="chapter">04 · QUÁ TRÌNH CHUẨN BỊ</p><h2>Năm bước chuẩn bị<br><em>cho một bước ngoặt.</em></h2><p class="preparation-summary">Từ hành trình tìm đường cứu nước đến sự hình thành lực lượng và tổ chức cách mạng.</p></div>
  <div class="preparation-steps"><p class="steps-kicker">NĂM BƯỚC CHUẨN BỊ</p><div class="pipeline"><span>TÌM ĐƯỜNG</span><i>↓</i><span>LÝ LUẬN</span><i>↓</i><span>TRUYỀN BÁ</span><i>↓</i><span>CÁN BỘ</span><i>↓</i><span>TỔ CHỨC</span></div></div></div>
  <div class="vertical-timeline">${preparation.map((x,i)=>`<article class="timeline-stage" data-timeline-stage="${i}" data-stage-title="${x[0]} · ${x[1]}"><span class="stage-dot">${String(i+1).padStart(2,'0')}</span><figure class="timeline-visual"><img src="${timelineMedia[i].url}" alt="Hình ảnh cho mốc ${x[0]}: ${x[1]}" loading="lazy"><figcaption>${timelineMedia[i].caption}</figcaption></figure><div class="timeline-copy"><p>${x[0]} · VÌ SAO QUAN TRỌNG</p><h3>${x[1]}</h3><span>${x[2]}</span>${sourceButton('preparation')}</div></article>`).join('')}</div><a class="photo-credit" href="https://inkythuatso.com/hinh-anh-dep/hinh-anh-bac-ho-ra-di-tim-duong-cuu-nuoc-4848.html" target="_blank" rel="noopener">Nguồn tuyển tập ảnh: In Kỹ Thuật Số ↗</a>
 </div></section>
 <section class="scene paradox" id="scene-6" data-scene="6"><div class="scene-inner">
  <div class="paradox-layout"><header class="paradox-intro"><p class="chapter">05 · MÂU THUẪN NĂM 1929</p><p class="year-mark">1929</p><h2>Nhiều tổ chức,<br><em>chưa thống nhất.</em></h2><p class="paradox-lede">Phong trào đã phát triển về tổ chức, nhưng ba lực lượng cùng khuynh hướng lại hoạt động phân tán.</p><div class="paradox-thesis"><small>VẤN ĐỀ TRỌNG TÂM</small><strong>Cùng mục tiêu<br>≠ cùng một tổ chức</strong></div></header>
  <div class="convergence-board"><div class="board-label"><span>BA TỔ CHỨC</span><i></i><span>MỘT NHU CẦU LỊCH SỬ</span></div><div class="nodes"><svg class="convergence-lines" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true"><defs><marker id="convergence-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z"/></marker></defs><path pathLength="1" d="M335 118 C405 126 430 170 470 205"/><path pathLength="1" d="M665 118 C595 126 570 170 530 205"/><path pathLength="1" d="M500 325 C500 285 500 255 500 238"/></svg><button data-node="a"><span>01</span>ĐÔNG DƯƠNG<strong>CỘNG SẢN ĐẢNG</strong><small>17·6·1929</small></button><div class="merge-target"><span>?</span><b>NHU CẦU<br>THỐNG NHẤT</b></div><button data-node="b"><span>02</span>AN NAM<strong>CỘNG SẢN ĐẢNG</strong><small>11·1929</small></button><button data-node="c"><span>03</span>ĐÔNG DƯƠNG<strong>CS LIÊN ĐOÀN</strong><small>9 → 12·1929</small></button></div>
  <button class="merge-button">Mô phỏng quá trình hợp nhất <span>→</span></button><p class="merge-result" aria-live="polite">Cùng khuynh hướng · phân tán lực lượng · thiếu thống nhất tổ chức</p></div></div>
  <div class="paradox-evidence">${label('interpretation')} ${sourceButton('organizations')}</div>
 </div></section>
 <section class="scene conference" id="scene-7" data-scene="7"><div class="scene-inner">
  <header class="conference-heading"><div><p class="chapter">06 · HỘI NGHỊ HỢP NHẤT</p><h2>Từ nhu cầu lịch sử<br>đến <em>quyết định.</em></h2></div><p>Hội nghị biến yêu cầu thống nhất các tổ chức cộng sản thành một quyết định chính trị và tổ chức cụ thể.</p></header>
  <div class="conference-stage"><figure class="historical-art conference-art"><img src="${conferencePhoto}" alt="Tranh minh họa Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất các tổ chức cộng sản tại Cửu Long, Hồng Kông." loading="lazy"><figcaption><a href="https://special.nhandan.vn/chuyen-Bac-Ho-voi-sinh-nhat-Dang/index.html" target="_blank" rel="noopener">TRANH MINH HỌA · NGUỒN: BÁO NHÂN DÂN ↗</a></figcaption><div class="image-context"><small>ĐỊA ĐIỂM</small><strong>Cửu Long<br>Hồng Kông</strong></div></figure><div class="conference-dossier"><p class="dossier-label">HỒ SƠ SỰ KIỆN · 1930</p><div class="date-range"><div><small>KHAI MẠC</small><b>06·01</b></div><i>→</i><div><small>KẾT THÚC</small><b>07·02</b></div></div><div class="chair"><small>TRIỆU TẬP VÀ CHỦ TRÌ</small><strong>Nguyễn Ái Quốc</strong></div><div class="chronology"><article><b>03·02</b><p>Ngày được quyết nghị sau này làm ngày kỷ niệm thành lập Đảng.</p></article><article><b>24·02</b><p>Đông Dương Cộng sản Liên đoàn gia nhập — hoàn tất thống nhất.</p></article></div></div></div>
  <div class="conference-outcomes"><p><small>NỘI DUNG HỘI NGHỊ</small><strong>5 quyết định nền tảng</strong></p><div class="five-points">${['Bỏ thành kiến, xung đột cũ','Xác định tên Đảng','Thảo Chính cương và Điều lệ','Kế hoạch thống nhất trong nước','Cử Ban Trung ương lâm thời'].map((x,i)=>`<span><b>0${i+1}</b>${x}</span>`).join('')}</div></div><div class="conference-evidence">${label()} ${sourceButton('conference')}</div>
 </div></section>
 <section class="scene platform" id="scene-8" data-scene="8"><div class="scene-inner">
  <header class="platform-heading"><div><p class="chapter">07 · ĐƯỜNG LỐI</p><h2>Một tổ chức thống nhất<br>cần một <em>Cương lĩnh.</em></h2></div><p>Cương lĩnh đầu tiên trả lời sáu câu hỏi nền tảng: đi đâu, làm gì, vì ai, bằng cách nào và dưới sự lãnh đạo của ai.</p></header>
  <div class="platform-body"><section class="document-panel" aria-label="Thành phần Cương lĩnh chính trị đầu tiên"><p class="panel-kicker">HAI VĂN KIỆN · MỘT ĐƯỜNG LỐI</p><div class="document-equation"><article><small>VĂN KIỆN 01</small><strong>CHÁNH CƯƠNG</strong><span>Vắn tắt</span></article><b>+</b><article><small>VĂN KIỆN 02</small><strong>SÁCH LƯỢC</strong><span>Vắn tắt</span></article><b>=</b><article class="result"><small>KẾT QUẢ</small><strong>CƯƠNG LĨNH</strong><span>Chính trị đầu tiên</span></article></div><p class="clarify">Chương trình tóm tắt và Điều lệ vắn tắt cũng được thông qua, nhưng <strong>không phải</strong> thành phần của Cương lĩnh đầu tiên theo giáo trình.</p></section>
  <section class="platform-principles"><div class="principles-heading"><small>SÁU NỘI DUNG CỐT LÕI</small><strong>Khung tư duy của Cương lĩnh</strong></div><div class="platform-grid">${platform.map(x=>`<article><b>${x[0]}</b><div><h3>${x[1]}</h3><p>${x[2]}</p></div></article>`).join('')}</div></section></div><div class="platform-evidence">${label('interpretation')} ${sourceButton('platform')}</div>
 </div></section>
 <section class="scene turning" id="scene-9" data-scene="9"><div class="scene-inner">
  <header class="finale-hero"><div class="finale-year"><small>BƯỚC NGOẶT</small><strong>1930</strong></div><div class="finale-question"><p class="chapter">08 · KẾT LUẬN</p><h2>Thay đổi điều gì<br><em>về chất?</em></h2><p>Không chỉ thêm một tổ chức mới, năm 1930 tạo ra một hệ thống lãnh đạo cách mạng thống nhất.</p></div></header>
  <div class="comparison"><div class="comparison-head"><span>TRƯỚC 1930</span><i>CHUYỂN BIẾN</i><span>TỪ 1930</span></div><article><div><small>PHONG TRÀO YÊU NƯỚC</small><b>Thiếu đường lối</b></div><i>01</i><div><small>CƯƠNG LĨNH CHÍNH TRỊ</small><b>Một đường lối</b></div></article><article><div><small>NHIỀU TỔ CHỨC</small><b>Phân tán</b></div><i>02</i><div><small>ĐẢNG CỘNG SẢN VIỆT NAM</small><b>Một chính đảng thống nhất</b></div></article><article><div><small>LỰC LƯỢNG YÊU NƯỚC</small><b>Chưa có trung tâm lãnh đạo</b></div><i>03</i><div><small>CÔNG–NÔNG VÀ LỰC LƯỢNG YÊU NƯỚC</small><b>Lực lượng + phương pháp</b></div></article></div>
  <div class="finale-thesis"><span>KHÔNG PHẢI MỘT MỐC CÔ LẬP</span><blockquote>1930 là một<br><em>điểm hội tụ.</em></blockquote><div class="convergence-key"><span>ĐƯỜNG LỐI</span><i>×</i><span>TỔ CHỨC</span><i>×</i><span>LỰC LƯỢNG</span></div></div>
  <div class="finale-footer"><div class="finale-evidence">${label('group')} ${sourceButton('turning')}</div><div class="final-actions"><button id="quiz-final">Kiểm tra hiểu biết</button><a href="${textbookUrl}" target="_blank" rel="noopener">Mở giáo trình gốc</a><a href="#scene-5">Xem lại dòng thời gian</a></div></div><p class="transparency">AI hỗ trợ tổ chức nội dung, thiết kế và phát triển. Dữ kiện lịch sử được đối chiếu với giáo trình gốc.</p>
 </div></section>`)}

function render(){if(location.pathname!=='/')history.replaceState({},'','/');document.body.dataset.mode='study';document.querySelector('#app').innerHTML=home();bind();}
function bind(){
 const drawer=document.querySelector('.drawer'),backdrop=document.querySelector('.drawer-backdrop');
 const closeDrawer=()=>{drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');backdrop.hidden=true};
 document.querySelectorAll('[data-source]').forEach(b=>b.addEventListener('click',()=>{let s=sources[b.dataset.source],firstPage=parseInt(s.pages,10);drawer.innerHTML=`<button class="drawer-close" aria-label="Đóng">×</button><p class="chapter">NGUỒN · ĐÃ ĐỐI CHIẾU</p><h2>${s.title}</h2><dl><dt>TÀI LIỆU</dt><dd>Giáo trình Lịch sử Đảng Cộng sản Việt Nam · Hà Nội, 6/2019</dd><dt>TRANG PDF</dt><dd>${s.pages}</dd><dt>ĐƯỢC DÙNG TẠI</dt><dd>${s.used}</dd><dt>LUẬN ĐIỂM</dt><dd>${s.claim}</dd></dl><a class="open-source" href="${textbookUrl}#page=${firstPage}" target="_blank" rel="noopener">Mở giáo trình tại trang ${firstPage} ↗</a>`;drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');backdrop.hidden=false;drawer.querySelector('button').focus()}));
 backdrop?.addEventListener('click',closeDrawer);drawer?.addEventListener('click',e=>{if(e.target.closest('.drawer-close'))closeDrawer()});document.onkeyup=e=>{if(e.key==='Escape')closeDrawer()};
 const fullscreenButton=document.querySelector('#fullscreen-toggle');
 const updateFullscreenLabel=()=>{if(fullscreenButton)fullscreenButton.textContent=document.fullscreenElement?'Thoát toàn màn hình':'Toàn màn hình'};
 fullscreenButton?.addEventListener('click',()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen());
 document.addEventListener('fullscreenchange',updateFullscreenLabel,{once:false});updateFullscreenLabel();
 document.querySelectorAll('.gap').forEach(g=>g.addEventListener('click',()=>g.classList.toggle('selected')));
 document.querySelector('.merge-button')?.addEventListener('click',e=>{document.querySelector('.nodes').classList.toggle('merged');let on=document.querySelector('.nodes').classList.contains('merged');e.currentTarget.innerHTML=on?'Xem trạng thái phân tán ↺':'Hợp nhất các lực lượng →';document.querySelector('.merge-result').textContent=on?'ĐẢNG CỘNG SẢN VIỆT NAM — một trung tâm lãnh đạo thống nhất':'Cùng khuynh hướng · phân tán lực lượng · thiếu thống nhất tổ chức'});
 setupQuiz(); setupNavigation(); setupKeys(); setupFit();
}
function setupFit(){
 const scenes=[...document.querySelectorAll('.scene:not(.preparation)')];
 if(!scenes.length)return;
 const mq=matchMedia('(max-width:800px)');
 const fit=scene=>{
  const inner=scene.querySelector('.scene-inner');
  if(!inner)return;
  if(mq.matches){inner.style.transform='';return;}
  inner.style.transform='none';
  const cs=getComputedStyle(scene);
  const availableH=scene.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom);
  const naturalH=inner.scrollHeight;
  const scale=Math.min(1,availableH/naturalH);
  inner.style.transform=scale<.999?`scale(${scale})`:'';
 };
 const fitAll=()=>scenes.forEach(fit);
 const ro=new ResizeObserver(entries=>entries.forEach(e=>{const scene=e.target.closest('.scene');if(scene)fit(scene)}));
 scenes.forEach(scene=>{const inner=scene.querySelector('.scene-inner');if(inner)ro.observe(inner)});
 window.addEventListener('resize',fitAll);
 mq.addEventListener('change',fitAll);
 document.fonts?.ready.then(fitAll);
 fitAll();
}
function setupQuiz(){
 const dialog=document.querySelector('#quiz'),body=document.querySelector('#quiz-body');
 let at=0,score=0;
 const draw=()=>{
  const x=quiz[at];
  body.innerHTML=`<p class="chapter">CÂU ${at+1} / ${quiz.length}</p><h2>${x.q}</h2><div class="answers">${x.a.map((a,i)=>`<button data-answer="${i}">${String.fromCharCode(65+i)}. ${a}</button>`).join('')}</div><div class="feedback"></div>`;
  body.querySelectorAll('[data-answer]').forEach(button=>{button.onclick=()=>{
   const ok=+button.dataset.answer===x.correct;
   if(ok)score++;
   body.querySelectorAll('[data-answer]').forEach(answer=>{answer.disabled=true;answer.classList.toggle('correct',+answer.dataset.answer===x.correct);answer.classList.toggle('wrong',answer===button&&!ok)});
   body.querySelector('.feedback').innerHTML=`<b>${ok?'Chính xác.':'Chưa chính xác.'}</b> ${x.explain}<br>${sourceButton(x.source)}<button class="next-q">${at===quiz.length-1?'Xem kết quả':'Câu tiếp theo →'}</button>`;
   body.querySelector('[data-source]')?.addEventListener('click',()=>document.querySelector(`main [data-source="${x.source}"]`)?.click());
   body.querySelector('.next-q').onclick=()=>{
    at++;
    if(at<quiz.length){draw();return;}
    body.innerHTML=`<p class="chapter">KẾT QUẢ</p><h2>${score} / ${quiz.length}</h2><p>${score===quiz.length?'Bạn đã nắm vững các mốc dễ nhầm.':'Hãy quay lại các cảnh và mở nguồn để kiểm tra các mốc còn nhầm.'}</p><button class="primary" id="retry">Làm lại</button>`;
    body.querySelector('#retry').onclick=()=>{at=0;score=0;draw()};
   };
  }});
 };
 draw();
 document.querySelectorAll('#quiz-open,#quiz-final').forEach(button=>button?.addEventListener('click',()=>dialog.showModal()));
 dialog.querySelector('.dialog-close').onclick=()=>dialog.close();
}
function setupNavigation(){
 const scenes=[...document.querySelectorAll('[data-scene]')],stages=[...document.querySelectorAll('[data-timeline-stage]')],intro=document.querySelector('[data-preparation-intro]'),counter=document.querySelector('.page-nav b'),status=document.querySelector('.chapter-status span'),prev=document.querySelector('.page-prev'),next=document.querySelector('.page-next');if(!scenes.length)return;
 const chapterNames=['DẪN NHẬP','KHỦNG HOẢNG','BỐI CẢNH QUỐC TẾ','BỐI CẢNH TRONG NƯỚC','QUÁ TRÌNH CHUẨN BỊ','NHU CẦU THỐNG NHẤT','HỘI NGHỊ HỢP NHẤT','CƯƠNG LĨNH','BƯỚC NGOẶT'];
 const preparationIndex=scenes.indexOf(intro?.closest('[data-scene]'));
 const pages=[...scenes.slice(0,preparationIndex),...(intro?[intro]:[]),...stages,...scenes.slice(preparationIndex+1)];
 let current=0;
 const activate=index=>{if(index<0)return;current=index;const target=pages[index],stageIndex=stages.indexOf(target),sceneIndex=target===intro||stageIndex>=0?preparationIndex:scenes.indexOf(target);scenes[sceneIndex]?.classList.add('scene-active');if(target===intro)intro.classList.add('stage-active');if(stageIndex>=0)target.classList.add('stage-active');document.querySelectorAll('.rail a').forEach((a,i)=>a.classList.toggle('active',i===sceneIndex));const progress=document.querySelector('.rail i');if(progress)progress.style.height=`${sceneIndex/(scenes.length-1)*100}%`;if(status)status.textContent=`${String(sceneIndex).padStart(2,'0')} · ${stageIndex>=0?`${chapterNames[sceneIndex]} — ${stages[stageIndex].dataset.stageTitle}`:chapterNames[sceneIndex]}`;if(counter)counter.textContent=stageIndex>=0?`${String(sceneIndex+1).padStart(2,'0')} · ${String(stageIndex+1).padStart(2,'0')}/08`:target===intro?`${String(sceneIndex+1).padStart(2,'0')} · TỔNG QUAN`:`${String(sceneIndex+1).padStart(2,'0')} / ${String(scenes.length).padStart(2,'0')}`;if(prev)prev.disabled=index===0;if(next)next.disabled=index===pages.length-1};
 const pageObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)activate(pages.indexOf(entry.target))}),{rootMargin:'-48% 0px -48% 0px',threshold:0});pages.forEach(page=>pageObserver.observe(page));
 prev?.addEventListener('click',()=>pages[Math.max(0,current-1)]?.scrollIntoView({behavior:'smooth',block:'start'}));
 next?.addEventListener('click',()=>pages[Math.min(pages.length-1,current+1)]?.scrollIntoView({behavior:'smooth',block:'start'}));
 document.querySelectorAll('.rail a').forEach((link,index)=>link.addEventListener('click',event=>{event.preventDefault();scenes[index]?.scrollIntoView({behavior:'smooth',block:'start'})}));
 activate(0);
 const hero=document.querySelector('.hero');hero?.addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5)*18,y=(e.clientY/innerHeight-.5)*18;hero.style.setProperty('--px',`${x}px`);hero.style.setProperty('--py',`${y}px`)});
}
function setupKeys(){document.onkeydown=e=>{if(document.querySelector('dialog[open]')||document.querySelector('.drawer.open'))return;if(e.key.toLowerCase()==='f')document.querySelector('#fullscreen-toggle')?.click();if(e.key.toLowerCase()==='q')document.querySelector('#quiz-open')?.click();if(e.key==='ArrowLeft')document.querySelector('.page-prev')?.click();if(e.key==='ArrowRight')document.querySelector('.page-next')?.click()}}
window.addEventListener('popstate',render);render();
