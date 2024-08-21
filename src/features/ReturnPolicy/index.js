import React from "react";
import BannerHeadPage from "../../components/BannerHeadPage";

const ReturnPolicy = () => {
  return (
    <>
      <div>
        <BannerHeadPage title={"Chính sách đổi trả"} />
      </div>
      <div className="max-w-container mx-auto w-full px-12 py-9">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">I. Chính sách trả hàng</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Sản phẩm có nguyên nhân từ lỗi sản phẩm do nhà sản xuất.</li>
            <li>Sản phẩm không đúng như thông tin trên web, đơn đặt hàng.</li>
            <li>Ngoài ra, không áp dụng trả hàng với bất kỳ lý do nào.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            II. Chính sách đổi hàng
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Đổi mẫu trong vòng 3 ngày, đổi size trong vòng 7 ngày và chỉ đổi 1
              lần duy nhất với giá trị bằng hoặc cao hơn, nếu thấp hơn sẽ không
              được hoàn tiền.
            </li>
            <li>Trường hợp Sneaker Buzz giao nhầm mã, nhầm size, nhầm màu.</li>
            <li>
              Trong trường hợp khách hàng không chọn được sản phẩm thay thế
              khác, đối với đơn hàng Online, Sneaker Buzz sẽ gửi cho khách hàng
              một Code Voucher tương đương với số tiền đơn hàng khách hàng đã
              mua trước đó (không bao gồm phí vận chuyển). Thời hạn sử dụng Code
              Voucher là 30 ngày kể từ ngày phát hành. (Code Voucher chỉ áp dụng
              tại web:{""}{" "}
              <a
                href="http://localhost:3000/"
                className="text-blue-600 hover:underline"
              >
                http://localhost:3000/
              </a>
              , <strong>KHÔNG</strong> áp dụng tại hệ thống cửa hàng).
            </li>
          </ul>
        </section>

        <section>
          <h3 className=" text-red-500 font-semibold mb-2">Lưu ý:</h3>
          <ul className="list-circle pl-5 space-y-2">
            <li>- Mã không được áp dụng với hàng sale.</li>
            <li>
              - Mã không được áp dụng chung với chương trình khuyến mãi khác và
              áp dụng cho lần mua tiếp theo của hóa đơn phát sinh lần đầu ngay
              lúc đổi trả.
            </li>
            <li>
              - Trường hợp đổi sản phẩm khác có chênh lệch giá, khách hàng sẽ
              thanh toán thêm phần chênh lệch thiếu và QM Shop sẽ không hoàn trả
              phần chênh lệch dư.
            </li>
            <li>
              - Giá của sản phẩm đã mua là giá trên hóa đơn, giá của sản phẩm
              đổi là giá niêm yết tại thời điểm đổi hàng.
            </li>
          </ul>
        </section>
        <section className="mb-8 mt-8">
          <h2 className="text-xl font-semibold mb-4">
            III. Quy trình đổi size, đổi màu:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Đối với hàng mua Online: Trong vòng{" "}
              <span className="font-bold">2-3 ngày</span> kể từ ngày Quý khách
              nhận được hàng từ nhà vận chuyển.
            </li>
            <li>
              Quý khách sẽ được hỗ trợ đổi size. Trường hợp nếu chúng tôi hết
              size trên toàn hệ thống, Quý khách được hỗ trợ đổi qua sản phẩm
              khác và chỉ được đổi 1 lần duy nhất.
            </li>
            <li>
              Sản phẩm đổi phải đầy đủ phụ kiện kèm theo như: shopping bag, quà
              tặng (nếu có), hóa đơn bán lẻ, đối với sản phẩm giày/dép, hộp
              nguyên vẹn như ban đầu.
            </li>
            <li>
              Trường hợp ở xa, vui lòng đóng gói gửi lại sản phẩm theo địa chỉ
              đơn hàng gửi hoặc nhân viên tư vấn sẽ hỗ trợ cung cấp thông tin.
            </li>
            <li>
              Sau khi đã nhận, kiểm tra và chấp nhận sản phẩm mà Quý khách muốn
              đổi, chúng tôi sẽ liên hệ để xác nhận đổi hàng và gửi hàng cho Quý
              khách.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            IV. Quy trình trả hàng:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Đối với hàng mua Online: Trong vòng{" "}
              <span className="font-bold">2-3 ngày</span> kể từ ngày Quý khách
              nhận được hàng từ dịch vụ vận chuyển, nếu BẠN phát hiện sản phẩm
              bị lỗi hoặc không đúng như Quý khách đặt, trước khi gởi về, vui
              lòng liên hệ thông qua email:{" "}
              <a
                href="mailto:QMShop@gmail.com"
                className="text-blue-600 hover:underline"
              >
                QMShop@gmail.com
              </a>{" "}
              cho chúng tôi giám định trước.
            </li>
            <li>
              Chúng tôi sẽ kiểm nghiệm tình trạng hàng hóa và xác nhận cho khách
              hàng sản phẩm có được trả hay không.
            </li>
            <li>
              Bưu phẩm gửi về cần ghi rõ những thông tin của đơn hàng và gửi
              theo địa chỉ mà chúng tôi cung cấp.
            </li>
            <li>QM Shop sẽ chịu toàn bộ chi phí trong trường hợp này.</li>
            <li>
              Nếu hộp giày bị hư, móp Quý khách sẽ bồi thường cho chúng tôi 10%
              giá trị sản phẩm.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default ReturnPolicy;
