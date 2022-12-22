import dotenv from 'dotenv';
dotenv.config();

const { CONTACT_EMAIL, CONTACT_PHONE } = process.env;

export default (message) => {
  return `<div style="background:#ECECEC;width:100%;padding:5px 0 0 0;font-size:16px;">
  <!--   wrapper -->
  <div style="max-width: 720px;margin:20px auto;background:#ffffff;">
  <!--   header -->
  <div style="background:#000041;padding:10px 30px 0px;color:#ffffff;text-align:center;font-size:34px;height:70px;margin-top:30px">
    <span width="130" style="height:auto;margin:5px;float:center">Welcome to citizen Monitor</span>
  </div>
    <div style="width: 100%">
      <img src="https://imgs.search.brave.com/ScA81HoxKpTHTmOcnS1d8FGjRdmuwIzFZwCEMV_Kv90/rs:fit:960:430:1/g:ce/aHR0cHM6Ly9kYW0u/YWJib3R0LmNvbS9l/bi11cy9hYmJvdHRj/b3JwbmV3cy9pbWFn/ZXMvUndhbmRhLTk2/MHg0MzAuanBn" style="width:100%;" />
    </div>
  <!--   BODY -->
  <div style="padding:20px;margin: 0 auto;display:block;text-align:left;">
    ${message}
  <br><br>
  <div>
  If you have any questions, please call us on ${CONTACT_PHONE}, visit our <a href='http://Citizen-monitor.com'>Help Center</a>, or <a href='${CONTACT_EMAIL}'>Send us an email</a>
  </div>
  <br>
  <div>Best regards,<br></div>
  <b>Citizen-monitor Team</b>
  </div>
  <!-- end body   -->
  </div>
  <!-- FOOTER -->
  <div style="padding:35px 0px;text-align:left;">
    <div style="max-width:720px;margin: 0 auto;">
      Copyright, 2022<br>
      Citizen-monitor Team, All right reserved.
    </div>
  </div>
</div>`;
};
