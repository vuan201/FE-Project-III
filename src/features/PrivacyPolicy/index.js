import React from "react";
import BannerHeadPage from "../../components/BannerHeadPage";

const PrivacyPolicy = () => {
  return (
    <>
      <div>
        <BannerHeadPage title={"Chính sách bảo hành"} />
      </div>

      <div className="max-w-container mx-auto w-full px-12 py-9">
        <h2 className="text-xl font-semibold mb-2">Điều kiện bảo hành:</h2>
        <p className="mb-2">
          Sản phẩm được hỗ trợ khắc phục lỗi miễn phí nếu sản phẩm đó hội đủ các
          điều kiện sau:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Sản phẩm bị lỗi kỹ thuật do nhà sản xuất như: hở keo, đứt chỉ, gãy
            móc khoá, bung hoạ tiết trang trí (nơ, nút, hoa, …)
          </li>
          <li>Trong vòng 01 tháng kể từ ngày mua hàng.</li>
          <li>
            Khách Hàng còn giữ hóa đơn mua hàng tại Website:
            <a
              href="http://localhost:3000/"
              className="text-blue-500 hover:underline ml-1"
            >
              http://localhost:3000/
            </a>
          </li>
          <li>
            Hóa đơn phải còn nguyên vẹn, không chấp vá, bôi xóa, sửa chữa. Hóa
            đơn có đầy đủ thông tin: mẫu mã, số seri, ngày sản xuất, tên khách
            hàng sử dụng, địa chỉ, ngày mua.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          Những trường hợp không được hỗ trợ khắc phục lỗi:
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Vi phạm một trong những điều kiện bảo hành miễn phí ở mục 1.</li>
          <li>
            Sản phẩm không mua từ website:
            <a
              href="http://localhost:3000/"
              className="text-blue-500 hover:underline ml-1"
            >
              http://localhost:3000/
            </a>
          </li>
          <li>
            Khách hàng tự ý can thiệp sửa chữa sản phẩm hoặc sản phẩm bị hư hỏng
            do lỗi người sử dụng như bề mặt sản phẩm bị trầy xước, bị nứt, thấm
            nước nghiêm trọng, quai bị đứt, phụ kiện bị hỏng hoặc rơi mất...
          </li>
          <li>
            Những mặt hàng công ty đã duyệt bán sale hoặc duyệt giảm giá đặc
            biệt.
          </li>
          <li>
            Bộ Phận CSKH sẽ liên hệ với Khách Hàng để trao đổi thêm thông tin về
            sản phẩm lỗi. Sau thời gian phân tích, sẽ liên lạc Khách Hàng để
            thông báo hướng thực hiện.
          </li>
          <li>
            Các sản phẩm khuyến mãi, giảm giá và các sản phẩm Phụ trang, Phụ
            kiện (túi, ba lô, mắt kính, nón, vớ, dây đeo, móc khóa, ví, chăm
            sóc/vệ sinh giày...) sẽ không được hoàn đổi, bảo hành.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Phương thức bảo hành:</h2>
        <p className="mb-4">
          Chúng tôi giám định trước, sau khi giám định chúng tôi sẽ thông báo
          cho Bạn là có gửi về hay không, trường hợp gửi về Quý khách chỉ thanh
          toán phí vận chuyển từ người gửi.
        </p>

        <p className="mb-4">
          Quý khách hàng bắt buộc sử dụng đơn vị vận chuyển do QM Shop chỉ định
          cho các trường hợp đổi/trả hàng hóa, không tự ý sử dụng đơn vị vận
          chuyển khác để tránh xảy ra sai sót ảnh hưởng đến quy trình kiểm soát
          đơn hàng của QM Shop.
        </p>

        <p className="mb-4">
          Quý Khách chịu trách nhiệm cho tất cả sản phẩm trong quá trình gửi trả
          lại cho đến khi sản phẩm đến được kho hàng của công ty. Vui lòng gói
          sản phẩm kĩ để tránh hư hỏng hoặc mất mát.
        </p>

        <p className="mb-4">
          Quý khách vui lòng giữ lại hóa đơn mua hàng, biên lai gửi hàng của
          dịch vụ vận chuyển sau khi mua.
        </p>

        <div className="mb-4">
          <span className="text-red-500 font-semibold">Lưu ý: </span>
          <span>
            Quý khách cần vệ sinh sạch sản phẩm cần bảo hành trước khi gửi về
            cho Chúng tôi.
          </span>
        </div>

        <p className="mb-4">
          Sau khi Bộ Phận Bảo Hành Sản Phẩm nhận sản phẩm, chúng tôi sẽ tiến
          hành sửa chữa sản phẩm trong vòng 14 ngày đến 30 ngày, chúng tôi sẽ
          gọi điện cho Quý khách nếu sản phẩm đã được bảo hành xong. Quý khách
          đến địa chỉ thông báo để nhận sản phẩm, khi mang kèm theo phiếu nhận
          bảo hành, với khách hàng ở xa chúng tôi sẽ gửi sản phẩm lại cho khách
          hàng trong vòng 7 ngày. Chi phí vận chuyển gửi trả sản phẩm chúng tôi
          sẽ chi trả nếu sản phẩm bị lỗi hoàn toàn.
        </p>

        <p className="mb-4">
          Chính sách Bảo hành chỉ áp dụng nếu có bản gốc biên nhận mua hàng.
          Trong trường hợp Quý khách không cung cấp được các chứng từ liên quan,
          hoặc sản phẩm quá hạn bảo hành trong vòng 30 ngày, chúng tôi rất tiếc
          vì không thể thực hiện chính sách bảo hành cho đơn hàng đó.
        </p>

        <p className="mt-4 mb-2 text-xl font-semibold text-gray-800">
          Thương hiệu Toragon, các sản phẩm giày dép chất liệu nhựa và các sản
          phẩm phụ trang, phụ kiện (túi, ba lô, mắt kính, nón, vớ, dây đeo, móc
          khóa, ví, chăm sóc/vệ sinh giày...) sẽ không được bảo hành.
        </p>
        <p className="mb-4">
          QM Shop có quyền điều chỉnh các chính sách và điều kiện của website
          đối với các mặt hàng khuyến mại và chương trình đặc biệt tại bất kỳ
          thời điểm nào.
        </p>

        <p className="mb-4">
          Nếu Quý khách có bất kỳ thắc mắc hay yêu cầu khác, vui lòng liên hệ
          <strong> HOTLINE: 0982942754</strong> (Thứ 2 đến Thứ 7) 8h-17h để được
          tư vấn.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
