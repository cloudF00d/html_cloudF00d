// 이메일 주소 선택
function updateEmailDomain() {
    var emailInput = document.getElementById("email");
    var siteSelect = document.getElementById("site");
    var selectedSite = siteSelect.value;

    // 선택된 사이트에 대한 도메인 추가
    var domain = "";
    switch (selectedSite) {
        case "site1":
            domain = "gmail.com";
            break;
        case "site2":
            domain = "naver.com";
            break;
        case "site3":
            domain = "daum.net";
            break;
        case "site4":
            domain = "yahoo.com"; 
            break;
        default:
            domain = "";
    }

    // 이메일 주소에 선택된 사이트의 도메인을 추가
    emailInput.value = emailInput.value.split('@')[0] + '@' + domain;
}


  // 카테고리 드롭다운
  function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

// 카테고리 선택 함수
function selectCategory(category) {
    var dropdownBtn = document.querySelector('.dropdown-btn');
    dropdownBtn.textContent = category;
    toggleDropdown(); // 선택 후 드롭다운 닫기
}

// 화면을 클릭하면 드롭다운이 닫히도록 설정
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
