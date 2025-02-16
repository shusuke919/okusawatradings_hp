"use client";
import { useState } from "react";

export default function ReservationPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState(""); // 予約内容
  const [message, setMessage] = useState(""); // 成功・エラーのメッセージ表示用

  // 9:00～19:00 の時間リストを作成
  const times = Array.from({ length: 11 }, (_, i) => `${9 + i}:00`);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMessage(""); // メッセージを初期化

    // バリデーション: 必須項目のチェック
    if (!date || !time || !email || !details) {
      setMessage("日付、時間、メールアドレス、内容をすべて入力してください。");
      return;
    }

    try {
      // API Route にデータ送信
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, time, email, details }),
      });
      const data = await res.json();

      if (data.success) {
        setMessage("予約が送信されました。ありがとうございます！");
        setDate("");
        setTime("");
        setEmail("");
        setDetails("");
      } else {
        setMessage("送信に失敗しました: " + data.error);
      }
    } catch (error) {
      console.error(error);
      setMessage("エラーが発生しました。");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          📅 打ち合わせ予約
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 日付選択 */}
          <div>
            <label htmlFor="date" className="block font-medium text-gray-700">
              日付：
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 時間選択 */}
          <div>
            <label htmlFor="time" className="block font-medium text-gray-700">
              時間：
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">選択してください</option>
              {times.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* メールアドレス入力 */}
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              メールアドレス：
            </label>
            <input
              type="email"
              id="email"
              placeholder="your-email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 予約内容入力 */}
          <div>
            <label
              htmlFor="details"
              className="block font-medium text-gray-700"
            >
              打ち合わせ内容：
            </label>
            <textarea
              id="details"
              placeholder="打ち合わせの目的や希望内容を入力してください"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
              className="w-full p-2 border rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            送信する
          </button>
        </form>

        {/* メッセージ表示 */}
        {message && (
          <p className="text-center text-sm font-medium mt-4 text-red-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
