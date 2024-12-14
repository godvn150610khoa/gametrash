let trashItems = [ { name: "Hộp bánh nhựa", type: "plastic" },
    { name: "Vỏ trứng", type: "organic" },
    { name: "Ly thủy tinh", type: "glass" },
    { name: "Giấy báo cũ", type: "paper" },
    { name: "Nắp lon bia", type: "metal" },
    { name: "Túi ni-lông", type: "plastic" },
    { name: "Lá cây khô", type: "organic" },
    { name: "Lọ nước hoa thủy tinh", type: "glass" },
    { name: "Hộp nhôm thức ăn", type: "metal" },
    { name: "Giấy gói quà", type: "paper" },
    { name: "Cành cây gãy", type: "organic" },
    { name: "Kính râm hỏng", type: "glass" },
    { name: "Đinh sắt", type: "metal" },
    { name: "Bìa sách", type: "paper" },
    { name: "Thìa nhựa", type: "plastic" },
    { name: "Cơm thừa", type: "organic" },
    { name: "Chai bia thủy tinh", type: "glass" },
    { name: "Hộp thiếc", type: "metal" },
    { name: "Sổ ghi chép cũ", type: "paper" },
    { name: "Dây buộc nhựa", type: "plastic" },
    { name: "Rau héo", type: "organic" },
    { name: "Tấm kính vỡ", type: "glass" },
    { name: "Nồi nhôm cũ", type: "metal" },
    { name: "Hộp giấy đựng pizza", type: "paper" },
    { name: "Bút bi hỏng", type: "plastic" },
    { name: "Vỏ cà rốt", type: "organic" },
    { name: "Cốc thủy tinh mẻ", type: "glass" },
    { name: "Dây thép", type: "metal" },
    { name: "Giấy ăn đã dùng", type: "paper" },
    { name: "Nắp chai nhựa", type: "plastic" },
    { name: "Quả dừa khô", type: "organic" },
    { name: "Bình thủy tinh đựng rượu", type: "glass" },
    { name: "Lon đựng cá hộp", type: "metal" },
    { name: "Bao thư cũ", type: "paper" },
    { name: "Hộp bút nhựa", type: "plastic" },
    { name: "Lõi ngô", type: "organic" },
    { name: "Ly thủy tinh lớn", type: "glass" },
    { name: "Ống nhôm cũ", type: "metal" },
    { name: "Tờ rơi cũ", type: "paper" },
    { name: "Đĩa nhựa", type: "plastic" },
    { name: "Bánh mì cũ", type: "organic" },
    { name: "Bình hoa thủy tinh", type: "glass" },
    { name: "Đồng hồ hỏng", type: "metal" },
    { name: "Hộp giấy đựng quà", type: "paper" },
    { name: "Băng dính nhựa", type: "plastic" },
    { name: "Xương gà", type: "organic" },
    { name: "Cửa kính", type: "glass" },
    { name: "Lưỡi dao cũ", type: "metal" },
    { name: "Sách vở cũ", type: "paper" },
    { name: "Vỏ chai nước suối", type: "plastic" },
    { name: "Vỏ cam", type: "organic" },
    { name: "Bát thủy tinh nhỏ", type: "glass" },
    { name: "Khung nhôm", type: "metal" },
    { name: "Giấy viết thư", type: "paper" },
    { name: "Dép nhựa", type: "plastic" },
    { name: "Vỏ hành", type: "organic" },
    { name: "lọ nước mắm", type: "glass" },
    { name: "Đĩa kim loại", type: "metal" },
    { name: "Giấy quảng cáo", type: "paper" },
    { name: "Hộp nhựa thức ăn", type: "plastic" },
    { name: "Cọng rau muống", type: "organic" },
    { name: "Kính cửa sổ", type: "glass" },
    { name: "Nắp xoong nhôm", type: "metal" },
    { name: "Bì thư cũ", type: "paper" },
    { name: "Cốc nhựa", type: "plastic" },
    { name: "Cỏ tươi", type: "organic" },
    { name: "Chai thủy tinh sữa", type: "glass" },
    { name: "Ốc vít kim loại", type: "metal" },
    { name: "Giấy bọc đồ ăn", type: "paper" },
    { name: "Vỏ hộp sữa", type: "plastic" },
    { name: "Bắp cải hỏng", type: "organic" },
    { name: "Bình thủy tinh", type: "glass" },
    { name: "Lon nước ngọt", type: "metal" },
    { name: "Giấy ghi chú", type: "paper" },
    { name: "Dao nhựa", type: "plastic" },
    { name: "Hạt cà phê", type: "organic" },
    { name: "Chai bia", type: "glass" },
    { name: "Đồ gọt bút kim loại", type: "metal" },
    { name: "Sách giáo khoa", type: "paper" },
    { name: "Ống hút nước", type: "plastic" },
    { name: "Quả dứa", type: "organic" },
    { name: "Kính râm", type: "glass" },
    { name: "Vỉ nướng", type: "metal" },
    { name: "Sổ tay cũ", type: "paper" }];
let bins = ["plastic", "organic", "glass", "paper", "metal"];
let timer = 60; // Thời gian chơi (giây)
let score = 0;
let playerName = "";
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || []; // Lấy bảng xếp hạng từ localStorage

// Lấy các phần tử DOM
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const trashElement = document.getElementById("trash");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const leaderboardScreen = document.getElementById("leaderboard-screen");
const leaderboardElement = document.getElementById("leaderboard");

// Bắt đầu trò chơi
function startGame() {
    const nameInput = document.getElementById("player-name").value.trim();

    if (!nameInput) {
        alert("Vui lòng nhập tên của bạn!");
        return;
    }

    playerName = nameInput;
    score = 0;
    timer = 60;

    // Hiển thị màn hình trò chơi
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    leaderboardScreen.classList.add("hidden");

    scoreElement.textContent = `Điểm: ${score}`;
    timerElement.textContent = `Thời gian: ${timer}s`;

    // Đếm ngược thời gian
    const countdown = setInterval(() => {
        timer--;
        timerElement.textContent = `Thời gian: ${timer}s`;

        if (timer <= 0) {
            clearInterval(countdown);
            endGame();
        }
    }, 1000);

    generateTrash();
}

// Sinh rác ngẫu nhiên
function generateTrash() {
    if (trashItems.length === 0) {
        endGame();
        return;
    }

    const randomIndex = Math.floor(Math.random() * trashItems.length);
    const trash = trashItems[randomIndex];

    trashElement.textContent = trash.name;
    trashElement.setAttribute("data-type", trash.type);

    trashItems.splice(randomIndex, 1);
}

// Kiểm tra thùng rác
function checkTrash(binType) {
    const trashType = trashElement.getAttribute("data-type");

    if (binType === trashType) {
        score += 10;
        scoreElement.textContent = `Điểm: ${score}`;
    } else {
        alert("Sai thùng! Thử lại.");
    }

    generateTrash();
}

// Kết thúc trò chơi
function endGame() {
    alert(`Trò chơi kết thúc! Điểm cuối cùng của bạn là: ${score}`);
    gameScreen.classList.add("hidden");
    leaderboardScreen.classList.remove("hidden");

    // Thêm điểm vào bảng xếp hạng
    leaderboard.push({ name: playerName, score });
    leaderboard.sort((a, b) => b.score - a.score);

    // Lưu lại bảng xếp hạng vào localStorage
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    updateLeaderboard();
}

// Cập nhật bảng xếp hạng
function updateLeaderboard() {
    leaderboardElement.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${entry.name} - ${entry.score} điểm`;
        leaderboardElement.appendChild(listItem);
    });
}

// Chơi lại
function restartGame() {
    startScreen.classList.remove("hidden");
    leaderboardScreen.classList.add("hidden");
}
