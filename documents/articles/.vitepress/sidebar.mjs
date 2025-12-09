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
                text: 'bigint-math', link: '/specs/bigint-math/', collapsed: true, items: [
                    { text: 'class: BigIntMath', link: '/specs/bigint-math/BigIntMath' },
                ]
            },
            {
                text: 'binary-heap', link: '/specs/binary-heap/', collapsed: true, items: [
                    { text: 'class: BinaryHeap', link: '/specs/binary-heap/BinaryHeap' },
                    { text: 'class: BinaryHeapLite', link: '/specs/binary-heap/BinaryHeapLite' }
                ]
            },
            {
                text: 'binary-search', link: '/specs/binary-search/', collapsed: true, items: [
                    { text: 'function: binary_search', link: '/specs/binary-search/binary_search' },
                    { text: 'function: lower_bound', link: '/specs/binary-search/lower_bound' },
                    { text: 'function: upper_bound', link: '/specs/binary-search/upper_bound' },
                ]
            },
            {
                text: 'deque', link: '/specs/deque/', collapsed: true, items: [
                    { text: 'class: Deque', link: '/specs/deque/Deque/' },
                ]
            },
            {
                text: 'disjoint-set', link: '/specs/disjoint-set/', collapsed: true, items: [
                    { text: 'class: DisjointSet', link: '/specs/disjoint-set/DisjointSet/' },
                ]
            },
            {
                text: 'ex-math', link: '/specs/ex-math/', collapsed: true, items: [
                    { text: 'class: ExMath', link: '/specs/ex-math/ExMath/' },
                ]
            },
            {
                text: 'ex-string', link: '/specs/ex-string/', collapsed: true, items: [
                    { text: 'class: ExString', link: '/specs/ex-string/ExString/' },
                ]
            },
            {
                text: 'geometry', link: '/specs/geometry/', collapsed: true, items: [
                    { text: 'class: Vector2D', link: '/specs/geometry/Vector2D/' },
                    { text: 'function: CCW', link: '/specs/geometry/CCW' },
                    { text: 'function: isSegmentsIntersect', link: '/specs/geometry/isSegmentsIntersect' },
                ]
            },
            {
                text: 'lazy-segment-tree', link: '/specs/lazy-segment-tree/', collapsed: true, items: [
                    { text: 'class: LazySegmentTree', link: '/specs/lazy-segment-tree/LazySegmentTree' },
                ]
            },
            {
                text: 'next-permutation', link: '/specs/next-permutation/', collapsed: true, items: [
                    { text: 'function: next_permutation', link: '/specs/next-permutation/next_permutation' },
                ]
            },
            {
                text: 'segment-tree', link: '/specs/segment-tree/', collapsed: true, items: [
                    { text: 'class: SegmentTree', link: '/specs/segment-tree/SegmentTree' }
                ]
            },
            {
                text: 'treap', link: '/specs/treap/', collapsed: true, items: [
                    { text: 'class: Treap', link: '/specs/treap/Treap' }
                ]
            },
            {
                text: 'unique-ids', link: '/specs/unique-ids/', collapsed: true, items: [
                    { text: 'function: getUUIDv7', link: '/specs/unique-ids/getUUIDv7' },
                ]
            },
        ]
    }
];
export { sidebar };
