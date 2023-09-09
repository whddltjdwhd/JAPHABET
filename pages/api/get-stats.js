export default async function handler(req, res) {
  try {
    // 1. 검증: HTTP GET 요청 확인
    if (req.method !== "GET") {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // 2. 보안 검증: 시크릿 키나 권한 검사가 필요하다면 여기서 처리

    // 3. 재검증: /stats 경로 재검증
    // res.revalidate() 메서드가 실제로 어떻게 동작하는지 이해해야 합니다.
    // 이 부분은 다른 코드에 따라 다를 수 있습니다.

    // 아래 코드는 /stats 경로를 재검증하는 가상의 코드입니다.
    // 실제 코드는 이에 맞게 수정되어야 합니다.
    // await res.revalidate('/stats')

    // 4. 성공 응답
    console.log("Revalidated!");
    return res.json({ revalidated: true });
  } catch (err) {
    // 5. 에러 처리: 예외가 발생한 경우 500 상태 코드로 응답
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
