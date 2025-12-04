export function errorMapper(error, toast) {
  // Timeout or request aborted
  if (error.code === "ECONNABORTED") {
    toast.error("سرور دیر پاسخ داد. لطفاً دوباره تلاش کنید.");
    return;
  }

  // Network errors (internet off, server down, DNS issue, CORS block)
  if (!error.response) {
    toast.error("اتصال به سرور برقرار نشد. لطفاً اینترنت خود را چک کنید.");
    return;
  }

  const status = error.response.status;



  // Status-based handling
  switch (status) {
    case 400:
      toast.error("اطلاعات ارسال‌شده معتبر نیست.");
      break;

    case 401:
      toast.error("برای ادامه وارد حساب کاربری شوید.");
      break;

    case 403:
      toast.error("شما اجازه دسترسی به این بخش را ندارید.");
      break;

    case 404:
      toast.error("موردی یافت نشد یا ممکن است حذف شده باشد.");
      break;

    case 500:
      toast.error("خطای داخلی سرور. لطفاً بعداً دوباره امتحان کنید.");
      break;

    default:
      toast.error("خطای ناشناخته‌ای رخ داده. لطفاً دوباره امتحان کنید.");
  }
}
