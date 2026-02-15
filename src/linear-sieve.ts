// ================================================================================================
// entrypoint: linear-sieve
// 線形篩アルゴリズムとそれに関連したメソッドを提供するユーティリティクラス
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

/**
 * 線形篩アルゴリズムとそれに関連したメソッドを提供するユーティリティクラス
 */
class LinearSieve {
    /**
     * N以下のすべての整数の最小素因数を列挙します。
     * @param N 最大値。
     * @returns 1からNまでの整数の最小素因数を列挙した配列。
     * @remarks
     * - `mpf[i]`はiの最小素因数を表します。
     * - `mpf[0]`・`mpf[1]`は`NaN`になります。
     */
    public static getAllMPF(N: number): number[] {
        /** 発見した素数のリスト */
        const primes: number[] = [];
        /** 最小素因数のリスト */
        const mpf: number[] = new Array(N + 1).fill(NaN);
        for (let i = 2; i <= N; i++) {
            if (isNaN(mpf[i])) {
                mpf[i] = i;
                primes.push(i);
            }
            for (const p of primes) {
                if (p > mpf[i] || p * i > N) break;
                mpf[p * i] = p;
            }
        }
        return mpf;
    }

    /**
     * N以下のすべての素数を列挙します。
     * @param N 最大値。
     * @returns 1からNまでの素数を昇順で列挙した配列。
     * @remarks
     * - `N < 2`の場合は空配列を返します。
     */
    public static getAllPrimes(N: number): number[] {
        if (N < 2) return [];
        const mpf = this.getAllMPF(N);
        const primes: number[] = [];
        for (let i = 2; i <= N; i++) {
            if (mpf[i] === i) primes.push(i);
        }
        return primes;
    }

    /**
     * Nの素因数分解を行います。
     * @param N 対象の整数。
     * @returns Nの素因数を昇順で列挙した配列。重複あり。
     * @remarks
     * - `N < 2`の場合は空配列を返します。
     */
    public static primeFactorization(N: number): number[] {
        if (N < 2) return [];
        const mpf = this.getAllMPF(N);
        let now = N;
        const factors: number[] = [];
        while (now > 1) {
            factors.push(mpf[now]);
            now /= mpf[now];
        }
        return factors;
    }
}

// ================================================================
// エクスポート
// ================================================================

export { LinearSieve };
