const sidebar = [
    {
        text: 'Introduction', link: '/introduction/', collapsed: false, items: [
            { text: 'Installation', link: '/introduction/installation' },
            { text: 'Q&A', link: '/introduction/q_and_a' },
        ]
    },
    {
        text: 'Entrypoints\' Specs',
        items: [
            {
                text: 'bigint-math', link: '/specs/bigint-math/', collapsed: true, items: [
                    { text: 'class: BigIntMath', link: '/specs/bigint-math/BigIntMath' },
                ]
            },
            {
                text: 'binary-heap', link: '/specs/binary-heap/', collapsed: true, items: [
                    { text: 'class: BinaryHeap', link: '/specs/binary-heap/BinaryHeap', collapsed: true },
                    { text: 'class: BinaryHeapLite', link: '/specs/binary-heap/BinaryHeapLite', collapsed: true }
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
                    {
                        text: 'class: Deque', link: '/specs/deque/Deque/', collapsed: true, items: [
                            { text: 'constructor: new Deque', link: '<!-- Need Re-Link -->' },
                            { text: 'getter: size', link: '<!-- Need Re-Link -->' },
                            { text: 'method: unshift', link: '<!-- Need Re-Link -->' },
                            { text: 'method: push', link: '<!-- Need Re-Link -->' },
                            { text: 'method: shift', link: '<!-- Need Re-Link -->' },
                            { text: 'method: pop', link: '<!-- Need Re-Link -->' },
                            { text: 'method: first', link: '<!-- Need Re-Link -->' },
                            { text: 'method: last', link: '<!-- Need Re-Link -->' },
                            { text: 'method: isEmpty', link: '<!-- Need Re-Link -->' },
                            { text: 'method: toArray', link: '<!-- Need Re-Link -->' },
                        ]
                    },
                ]
            },
            {
                text: 'disjoint-set', link: '/specs/disjoint-set/', collapsed: true, items: [
                    {
                        text: 'class: DisjointSet', link: '/specs/disjoint-set/DisjointSet/', collapsed: true, items: [
                            { text: 'constructor: new DisjointSet', link: '<!-- Need Re-Link -->' },
                            { text: 'getter: componentCount', link: '<!-- Need Re-Link -->' },
                            { text: 'method: find', link: '<!-- Need Re-Link -->' },
                            { text: 'method: union', link: '<!-- Need Re-Link -->' },
                            { text: 'method: connected', link: '<!-- Need Re-Link -->' },
                        ]
                    },
                ]
            },
            {
                text: 'ex-math', link: '/specs/ex-math/', collapsed: true, items: [
                    {
                        text: 'class: ExMath', link: '/specs/ex-math/ExMath/', collapsed: true, items: [
                            { text: 'static method: gcd', link: '<!-- Need Re-Link -->' },
                            { text: 'static method: lcm', link: '<!-- Need Re-Link -->' },
                            { text: 'static method: getDivisors', link: '<!-- Need Re-Link -->' },
                        ]
                    },
                ]
            },
            {
                text: 'ex-string', link: '/specs/ex-string/', collapsed: true, items: [
                    {
                        text: 'class: ExString', link: '/specs/ex-string/ExString/', collapsed: true, items: [
                            { text: 'static method: runLengthEncode', link: '<!-- Need Re-Link -->' },
                        ]
                    },
                ]
            },
            {
                text: 'geometry', link: '/specs/geometry/', collapsed: true, items: [
                    {
                        text: 'class: Vector2D', link: '/specs/geometry/Vector2D/', collapsed: true, items: [
                            { text: 'constructor: new Vector2D', link: '<!-- Need Re-Link -->' },
                            { text: 'method: add', link: '<!-- Need Re-Link -->' },
                            { text: 'method: sub', link: '<!-- Need Re-Link -->' },
                            { text: 'method: dot', link: '<!-- Need Re-Link -->' },
                            { text: 'method: cross', link: '<!-- Need Re-Link -->' },
                            { text: 'property: x', link: '<!-- Need Re-Link -->' },
                            { text: 'property: y', link: '<!-- Need Re-Link -->' },
                        ]
                    },
                    { text: 'function: CCW', link: '/specs/geometry/CCW' },
                    { text: 'function: isSegmentsIntersect', link: '/specs/geometry/isSegmentsIntersect' },
                ]
            },
            {
                text: 'next-permutation', link: '/specs/next-permutation/', collapsed: true, items: [
                    { text: 'function: next_permutation', link: '/specs/next-permutation/next_permutation' },
                ]
            },
            {
                text: 'segment-tree', link: '/specs/segment-tree/', collapsed: true, items: [
                    {
                        text: 'class: SegmentTree', link: '/specs/segment-tree/SegmentTree', collapsed: true, items: [
                            { text: 'constructor: new SegmentTree', link: '<!-- Need Re-Link -->' },
                            { text: 'getter: size', link: '<!-- Need Re-Link -->' },
                            { text: 'method: set', link: '<!-- Need Re-Link -->' },
                            { text: 'method: get', link: '<!-- Need Re-Link -->' },
                            { text: 'method: query', link: '<!-- Need Re-Link -->' },
                            { text: 'method: queryAll', link: '<!-- Need Re-Link -->' },
                            { text: 'method: maxRight', link: '<!-- Need Re-Link -->' },
                            { text: 'method: minLeft', link: '<!-- Need Re-Link -->' },
                        ]
                    }
                ]
            },
            {
                text: 'treap', link: '/specs/treap/', collapsed: true, items: [
                    {
                        text: 'class: Treap', link: '/specs/treap/Treap', collapsed: true, items: [
                            { text: 'constructor: new Treap', link: '<!-- Need Re-Link -->' },
                            { text: 'getter: size', link: '<!-- Need Re-Link -->' },
                            { text: 'method: insert', link: '<!-- Need Re-Link -->' },
                            { text: 'method: erase', link: '<!-- Need Re-Link -->' },
                            { text: 'method: get', link: '<!-- Need Re-Link -->' },
                            { text: 'method: lowerBound', link: '<!-- Need Re-Link -->' },
                            { text: 'method: upperBound', link: '<!-- Need Re-Link -->' },
                            { text: 'method: kthElement', link: '<!-- Need Re-Link -->' },
                            { text: 'method: countAllComparisons', link: '<!-- Need Re-Link -->' },
                            { text: 'generator method: [Symbol.iterator]', link: '<!-- Need Re-Link -->' },
                        ]
                    }
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
