export default function MessageFooter() {
  return (
    <div className="md:col-span-6 md:block hidden">
      <span className="font-bold text-xl">پیام به ترخینه</span>
      <div className="w-full grid grid-cols-2  gap-x-3 items-stretch mt-6">
        <div className="flex flex-col gap-y-5 md:col-span-1 col-span-2">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="border border-[var(--Gray-8)] focus:outline-1 focus:outline-[var(--Tint-4)] rounded-sm text-[var(--Gray-2)] placeholder-[var(--Gray-2)] w-full px-3 py-3 text-sm"
          />
          <input
            type="text"
            placeholder="شماره تماس"
            className="border border-[var(--Gray-8)]  focus:outline-1 focus:outline-[var(--Tint-4)] rounded-sm text-[var(--Gray-2)] placeholder-[var(--Gray-2)] w-full px-3 py-3 text-sm"
          />
          <input
            type="email"
            placeholder="ایمیل (اختیاری)"
            className="border border-[var(--Gray-8)] focus:outline-1 focus:outline-[var(--Tint-4)] rounded-sm text-[var(--Gray-2)] placeholder-[var(--Gray-2)] w-full px-3 py-3 text-sm"
          />
        </div>
        {/* textarea */}
        <div className="border border-[var(--Gray-8)] rounded-sm text-[var(--Gray-2)] w-full text-sm md:col-span-1 col-span-2">
          <textarea
            name="messageTalkhine"
            id="messageTalkhine"
            placeholder="پیام شما"
            className="resize-none w-full h-full block  focus:outline-1 focus:outline-[var(--Tint-4)] placeholder-[var(--Gray-2)] px-3 py-3 rounded-sm"
          ></textarea>
        </div>
      </div>

      {/* button */}
      <div className="justify-end flex w-full">
        <button
          type="submit"
          className="border border-[var(--Gray-8)] rounded-sm text-[var(--Gray-2)] px-5 py-2 my-4 text-sm"
        >
          ارسال پیام
        </button>
      </div>
    </div>
  );
}
