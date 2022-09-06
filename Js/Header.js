class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>            
        <div class="header">
        <div class="header-left">
          <a href="Home.html">  <img src="./Image/logo_200x200.png" title="WARRIOR GYM - GYM FOR WARRIOR"> </a>
        </div>
        <div class="header-right">
            <div class="slogan">
                <p>WARRIOR GYM - GYM FOR REAL WARRIOR</p>
            </div>
            <div class="navbar">
                <ul>
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Gym</a></li>
                    <li><a href="#">Yoga</a></li>
                    <li><a href="#">Kickfit</a></li>
                    <li><a href="#">Hệ thống phòng tập</a></li>
                    <li><a href="#">Đăng ký tập thử</a></li>
                    <li class="news">
                        <a href="#">Tin tức</a>
                        <ul>
                            <a href="#">
                                <li>Giảm cân cho nam</li>
                            </a>
                            <a href="#">
                                <li>Giảm cân cho nữ</li>
                            </a>
                            <a href="#">
                                <li>Tăng cân cho nam</li>
                            </a>
                            <a href="#">
                                <li>Tăng cân cho nữ</li>
                            </a>
                            <a href="#">
                                <li>Chế độ dinh dưỡng</li>
                            </a>
                            <a href="#">
                                <li>Lưu ý khi tập luyện</li>
                            </a>
                            <a href="#">
                                <li>Yoga cho người mới</li>
                            </a>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>     
        </nav>
      `;
    }
  }
  customElements.define('main-header', Header);