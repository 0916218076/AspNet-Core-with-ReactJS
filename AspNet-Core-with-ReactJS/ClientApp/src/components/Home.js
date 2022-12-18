import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <section id="welcome-section" class="welcome-section">

            <h1>PETROLIMEX </h1>
            <p>Tập đoàn xăng dầu </p>
            <div class>
                <h2>
                    Petrolimex giữ vị trí chủ lực trên thị trường xăng dầu nội địa
                </h2>
                <p>Cùng các doanh nghiệp đầu mối kinh doanh xăng dầu khác và hơn 120 thương nhân phân phối xăng dầu, Petrolimex bảo đảm đầy đủ và kịp thời các chủng loại xăng dầu phục vụ phát triển kinh tế - xã hội, an ninh quốc phòng và nhu cầu tiêu dùng của nhân dân</p>
            </div>

        </section>



    );
  }
}
