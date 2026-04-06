const sidebar = [
    {
        text: 'Introduction', link: '/introduction/', collapsed: false, items: [
            { text: 'Installation', link: '/introduction/installation' },
            { text: 'Q&A', link: '/introduction/q_and_a' },
        ]
    },
    {
        text: 'Entrypoints\' Specs',
        link: '/specs/',
        collapsed: false,
        items: [
            {
                text: 'Math for BigInts', collapsed: true, items: [
                    { text: 'class: BigIntMath', link: '/specs/BigIntMath' },
                ]
            },
            {
                text: '二分ヒープ', collapsed: true, items: [
                    { text: 'class: BinaryHeap', link: '/specs/BinaryHeap' },
                    { text: 'class: BinaryHeapLite', link: '/specs/BinaryHeapLite' }
                ]
            },
            {
                text: '二分探索', collapsed: true, items: [
                    { text: 'function: binary_search', link: '/specs/binary_search' },
                    { text: 'function: lower_bound', link: '/specs/lower_bound' },
                    { text: 'function: upper_bound', link: '/specs/upper_bound' },
                ]
            },
            {
                text: 'Deque', collapsed: true, items: [
                    { text: 'class: Deque', link: '/specs/Deque' },
                ]
            },
            {
                text: 'Disjoint Set (Union-Find)', collapsed: true, items: [
                    { text: 'class: DisjointSet', link: '/specs/DisjointSet' },
                ]
            },
            {
                text: 'Extended Math', collapsed: true, items: [
                    { text: 'class: ExMath', link: '/specs/ExMath' },
                ]
            },
            {
                text: 'Extended String', collapsed: true, items: [
                    { text: 'class: ExString', link: '/specs/ExString' },
                ]
            },
            {
                text: '幾何学系 (Geometry)', collapsed: true, items: [
                    { text: 'class: Vector2D', link: '/specs/Vector2D/' },
                    { text: 'function: CCW', link: '/specs/CCW' },
                    { text: 'function: isSegmentsIntersect', link: '/specs/isSegmentsIntersect' },
                ]
            },
            {
                text: '遅延セグメント木', collapsed: true, items: [
                    { text: 'class: LazySegmentTree', link: '/specs/LazySegmentTree' },
                ]
            },
            {
                text: '線形篩', collapsed: true, items: [
                    { text: 'class: LinearSieve', link: '/specs/LinearSieve' },
                ]
            },
            {
                text: '最大流 (max-flow)', collapsed: true, items: [
                    { text: 'class: MaxFlow', link: '/specs/MaxFlow' },
                ]
            },
            {
                text: '順列全列挙', collapsed: true, items: [
                    { text: 'function: next_permutation', link: '/specs/next_permutation' },
                ]
            },
            {
                text: 'セグメント木', collapsed: true, items: [
                    { text: 'class: SegmentTree', link: '/specs/SegmentTree' }
                ]
            },
            {
                text: '平衡二分探索木 (Treap)', collapsed: true, items: [
                    { text: 'class: Treap', link: '/specs/Treap' }
                ]
            },
            {
                text: 'Unique IDs', collapsed: true, items: [
                    { text: 'function: getUUIDv7', link: '/specs/getUUIDv7' },
                ]
            },
        ]
    }
];
export { sidebar };
