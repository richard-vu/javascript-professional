Tóm tắt : trong hướng dẫn này, bạn sẽ tìm hiểu cách thiết lập dự án ES6 bằng Babel để 
chuyển đổi mã ES6 thành mã ES5 mà các trình duyệt có phiên bản cũ hơn có thể hiểu được.

Tổng quan về JavaScript Transpiler
Không phải tất cả các trình duyệt đều hỗ trợ mọi tính năng của ES6. Do đó, nếu bạn muốn
sử dụng một tính năng mới trong ES6 và mong muốn các trình duyệt cũ hiểu nó, bạn phải sử 
dụng bộ chuyển mã. Bộ chuyển đổi chuyển đổi mã JavaScript mới nhất trở lại phiên bản cũ
hơn để các trình duyệt cũ có thể hiểu được. Có một số bộ chuyển đổi chính như Traceur và Babel. 
Trong hướng dẫn này, chúng tôi sẽ chỉ cho bạn cách sử dụng Babel. https://babeljs.io/repl/
