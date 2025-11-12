// ダウンロードボタンのURLがプレースホルダーの場合、クリックを無効化
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === 'ここにzipファイルのURLを入力') {
                e.preventDefault();
                alert('ダウンロードURLが設定されていません。管理者にご連絡ください。');
            }
        });
    }
});

