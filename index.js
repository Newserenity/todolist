/// remove() 폴리필
///
if (!('remove' in Element.prototype)) {
    Element.prototype['remove'] = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
///
///


let opendFold = [];

function foldOpen(id) {
    var index = opendFold.indexOf(id);

    if( -1 >= index) {
        document.getElementById(id).className = "text-filde-div-show";
        opendFold.push(id);
    } else {
        document.getElementById(id).className = "text-filde-div";
        opendFold.splice(index, 1);
    }
}

function addItem(id1, id2){
    // 할일 가져오기
    let inputFildeValue = document.createTextNode(document.getElementById("inputFilde").value);

    // 할일 가져온거 체크
    if (!inputFildeValue) {
        alert("Filde is empty")
        return;
    }

    // 리스트 가져오기
    const list1 = document.getElementById(id1);
    const list2 = document.getElementById(id2);

    // 할일 카드 생성
    const div = document.createElement("div");
    const head = document.createElement("p");
    const date = document.createElement("p");
    const removeButton = document.createElement("button");
    const moveButton = document.createElement("button");

    // 시간 라이브러리
    let today = new Date()

    // 월, 일
    let month = today.getMonth() + 1; // 0월 시작
    let day = today.getDate();

    // 할일 삽입
    head.appendChild(inputFildeValue);

    // 날자 삽입
    date.innerHTML = month + "/" + day;

    // 버튼 글자삽입
    removeButton.innerHTML = "DL";
    moveButton.innerHTML = "MO";

    // class 추가
    head.classList.add("event-content");
    date.classList.add("event-content");
    removeButton.classList.add("del-button");
    moveButton.classList.add("del-button");

    // 삭제 기능 삽입
    removeButton.addEventListener("click", function () {
        div.remove();
    });

    // 이동기능 삽입
    moveButton.addEventListener("click", function(){
        moveButton.addEventListener("click", function () {
            
        });

        list2.appendChild(div);
    });

    // 묶기
    div.appendChild(head);
    div.appendChild(date);
    div.appendChild(removeButton);
    div.appendChild(moveButton);

    // 리스트에 추가
    list1.appendChild(div);
}

function doneAddList() {

}

// list

// 변수 asdf

// var input = document.getElementById("myInput");

//     input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("myBtn").click();
//   }
// });