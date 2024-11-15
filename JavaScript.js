<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

const reviews = [
    { text: "สินค้าดีมาก! สัตว์เลี้ยงของฉันชอบมากค่ะ", author: "คุณสมศรี" },
    { text: "บริการรวดเร็วและเป็นกันเองมากครับ", author: "คุณสมชาย" },
    { text: "คุณภาพสินค้าดีเยี่ยม ส่งไวมาก", author: "คุณสมฤดี" },
    { text: "ราคาคุ้มค่า บริการดีเยี่ยม", author: "คุณสมบัติ" },
    { text: "แนะนำเลยค่ะ สินค้าดีจริง", author: "คุณสมใจ" },
    { text: "พนักงานให้คำแนะนำดีมาก", author: "คุณสมหมาย" },
    { text: "สินค้าตรงตามที่โฆษณาไว้", author: "คณสมศักดิ์" },
    { text: "จะกลับมาซื้ออีกแน่นอน", author: "คุณสมพร" }
    // เพิ่มรีวิวเพิ่มเติมตามต้องการ
];

function displayRandomReview() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    const review = reviews[randomIndex];
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = `
        <div class="review">
            <p>"${review.text}"</p>
            <span>- ${review.author}</span>
        </div>
    `;
}

function shareReview() {
    const reviewText = document.querySelector('.review p').innerText;
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(reviewText)}`;
    window.open(url, '_blank');
}

// แสดงรีวิวแบบสุ่มเมื่อโหลดหน้า
window.onload = displayRandomReview;
