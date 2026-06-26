// 📚 THAI VOCABULARY DATABASE
const vocabularyDB = {
  greetings: {
    name: "🇹🇭 Greetings",
    words: [
      { thai: "สวัสดี", p: "sa-wàt-dee", m: "hello", difficulty: "beginner" },
      { thai: "ขอบคุณ", p: "khɔ̀ɔp-khun", m: "thank you", difficulty: "beginner" },
      { thai: "ไม่เป็นไร", p: "mai-pen-rai", m: "you're welcome", difficulty: "beginner" },
      { thai: "โปรดสวัสดี", p: "pro-sà-wàt-dee", m: "hello (polite)", difficulty: "intermediate" },
      { thai: "สวัสดีเช้า", p: "sa-wàt-dee-chao", m: "good morning", difficulty: "intermediate" },
      { thai: "สวัสดีค่ำ", p: "sa-wàt-dee-kham", m: "good evening", difficulty: "intermediate" }
    ]
  },
  
  food: {
    name: "🍜 Food & Drink",
    words: [
      { thai: "ข้าว", p: "khâao", m: "rice", difficulty: "beginner" },
      { thai: "น้ำ", p: "náam", m: "water", difficulty: "beginner" },
      { thai: "ปลา", p: "plaa", m: "fish", difficulty: "beginner" },
      { thai: "เนื้อ", p: "nûea", m: "meat", difficulty: "beginner" },
      { thai: "กุ้ง", p: "goong", m: "shrimp", difficulty: "beginner" },
      { thai: "หมู", p: "moo", m: "pork", difficulty: "beginner" },
      { thai: "ไก่", p: "gai", m: "chicken", difficulty: "beginner" },
      { thai: "ผัก", p: "phàk", m: "vegetable", difficulty: "intermediate" },
      { thai: "ผลไม้", p: "phon-lamai", m: "fruit", difficulty: "intermediate" },
      { thai: "กาแฟ", p: "gaa-fae", m: "coffee", difficulty: "intermediate" },
      { thai: "ชา", p: "chaa", m: "tea", difficulty: "beginner" },
      { thai: "เบียร์", p: "bia", m: "beer", difficulty: "intermediate" }
    ]
  },
  
  animals: {
    name: "🐾 Animals",
    words: [
      { thai: "หมา", p: "maa", m: "dog", difficulty: "beginner" },
      { thai: "แมว", p: "maeo", m: "cat", difficulty: "beginner" },
      { thai: "นก", p: "nok", m: "bird", difficulty: "beginner" },
      { thai: "ม้า", p: "maa", m: "horse", difficulty: "intermediate" },
      { thai: "ช้าง", p: "chaang", m: "elephant", difficulty: "intermediate" },
      { thai: "ลิง", p: "ling", m: "monkey", difficulty: "beginner" },
      { thai: "เสือ", p: "sûea", m: "tiger", difficulty: "intermediate" },
      { thai: "สิงโต", p: "sing-to", m: "lion", difficulty: "intermediate" },
      { thai: "งู", p: "ngoo", m: "snake", difficulty: "intermediate" }
    ]
  },
  
  numbers: {
    name: "🔢 Numbers",
    words: [
      { thai: "หนึ่ง", p: "nùeng", m: "one", difficulty: "beginner" },
      { thai: "สอง", p: "song", m: "two", difficulty: "beginner" },
      { thai: "สาม", p: "saam", m: "three", difficulty: "beginner" },
      { thai: "สี่", p: "sii", m: "four", difficulty: "beginner" },
      { thai: "ห้า", p: "haa", m: "five", difficulty: "beginner" },
      { thai: "หก", p: "hok", m: "six", difficulty: "beginner" },
      { thai: "เจ็ด", p: "chet", m: "seven", difficulty: "beginner" },
      { thai: "แปด", p: "paet", m: "eight", difficulty: "beginner" },
      { thai: "เก้า", p: "gao", m: "nine", difficulty: "beginner" },
      { thai: "สิบ", p: "sip", m: "ten", difficulty: "beginner" },
      { thai: "ร้อย", p: "roi", m: "hundred", difficulty: "intermediate" },
      { thai: "พัน", p: "phan", m: "thousand", difficulty: "intermediate" }
    ]
  },
  
  time: {
    name: "⏰ Time",
    words: [
      { thai: "วัน", p: "wan", m: "day", difficulty: "beginner" },
      { thai: "สัปดาห์", p: "sap-daa", m: "week", difficulty: "intermediate" },
      { thai: "เดือน", p: "duen", m: "month", difficulty: "intermediate" },
      { thai: "ปี", p: "pee", m: "year", difficulty: "beginner" },
      { thai: "เช้า", p: "chao", m: "morning", difficulty: "beginner" },
      { thai: "บ่าย", p: "bai", m: "afternoon", difficulty: "intermediate" },
      { thai: "ค่ำ", p: "kham", m: "evening", difficulty: "intermediate" },
      { thai: "กลางคืน", p: "glaang-kuen", m: "night", difficulty: "intermediate" }
    ]
  },
  
  daily: {
    name: "💼 Daily Activities",
    words: [
      { thai: "ทำงาน", p: "tham-ngaan", m: "work", difficulty: "beginner" },
      { thai: "กิน", p: "gin", m: "eat", difficulty: "beginner" },
      { thai: "นอน", p: "non", m: "sleep", difficulty: "beginner" },
      { thai: "เรียน", p: "rian", m: "study", difficulty: "beginner" },
      { thai: "เล่น", p: "len", m: "play", difficulty: "beginner" },
      { thai: "ดู", p: "doo", m: "watch", difficulty: "beginner" },
      { thai: "เดิน", p: "doen", m: "walk", difficulty: "intermediate" },
      { thai: "วิ่ง", p: "wing", m: "run", difficulty: "intermediate" },
      { thai: "อ่าน", p: "aan", m: "read", difficulty: "beginner" },
      { thai: "เขียน", p: "khian", m: "write", difficulty: "beginner" },
      { thai: "พูด", p: "phoot", m: "speak", difficulty: "beginner" }
    ]
  },
  
  colors: {
    name: "🎨 Colors",
    words: [
      { thai: "แดง", p: "daeng", m: "red", difficulty: "beginner" },
      { thai: "เขียว", p: "khiao", m: "green", difficulty: "beginner" },
      { thai: "น้ำเงิน", p: "nam-ngin", m: "blue", difficulty: "beginner" },
      { thai: "เหลือง", p: "lueang", m: "yellow", difficulty: "beginner" },
      { thai: "ดำ", p: "dam", m: "black", difficulty: "beginner" },
      { thai: "ขาว", p: "khao", m: "white", difficulty: "beginner" },
      { thai: "เทา", p: "thao", m: "gray", difficulty: "intermediate" },
      { thai: "ม่วง", p: "muang", m: "purple", difficulty: "intermediate" },
      { thai: "ส้ม", p: "som", m: "orange", difficulty: "intermediate" }
    ]
  },
  
  body: {
    name: "💪 Body Parts",
    words: [
      { thai: "หัว", p: "hua", m: "head", difficulty: "beginner" },
      { thai: "ตา", p: "taa", m: "eye", difficulty: "beginner" },
      { thai: "หู", p: "hoo", m: "ear", difficulty: "beginner" },
      { thai: "จมูก", p: "cha-mook", m: "nose", difficulty: "beginner" },
      { thai: "ปาก", p: "paak", m: "mouth", difficulty: "beginner" },
      { thai: "ฟัน", p: "fan", m: "tooth", difficulty: "intermediate" },
      { thai: "แขน", p: "khain", m: "arm", difficulty: "beginner" },
      { thai: "มือ", p: "mue", m: "hand", difficulty: "beginner" },
      { thai: "ขา", p: "khaa", m: "leg", difficulty: "beginner" },
      { thai: "เท้า", p: "thao", m: "foot", difficulty: "beginner" },
      { thai: "หัวใจ", p: "hua-jai", m: "heart", difficulty: "intermediate" }
    ]
  }
};

// Helper functions
function getAllWords() {
  let all = [];
  for (let cat in vocabularyDB) {
    all = all.concat(vocabularyDB[cat].words);
  }
  return all;
}

function getWordsByDifficulty(difficulty) {
  return getAllWords().filter(w => w.difficulty === difficulty);
}

function getWordsCount() {
  return getAllWords().length;
}