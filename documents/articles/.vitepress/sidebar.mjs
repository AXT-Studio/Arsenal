const sidebar = [
    {
        text: 'Introduction', link: '/introduction/', collapsed: false, items: [
            { text: 'What is "AyaExpTech Arsenal"?', link: '/introduction/what-is-arsenal' },
            { text: 'Installation', link: '/introduction/installation' },
            { text: 'Modules Overview', link: '/introduction/modules-overview' },
        ]
    },
    {
        text: 'Specifications',
        items: [
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
                            { text: 'constructor: new Deque', link: '/specs/deque/Deque/_constructor' },
                            { text: 'getter: size', link: '/specs/deque/Deque/size' },
                            { text: 'method: unshift', link: '/specs/deque/Deque/unshift' },
                            { text: 'method: push', link: '/specs/deque/Deque/push' },
                            { text: 'method: shift', link: '/specs/deque/Deque/shift' },
                            { text: 'method: pop', link: '/specs/deque/Deque/pop' },
                            { text: 'method: first', link: '/specs/deque/Deque/first' },
                            { text: 'method: last', link: '/specs/deque/Deque/last' },
                            { text: 'method: isEmpty', link: '/specs/deque/Deque/isEmpty' },
                            { text: 'method: toArray', link: '/specs/deque/Deque/toArray' },
                        ]
                    },
                ]
            },
            {
                text: 'geometry', link: '/specs/geometry/', collapsed: true, items: [
                    {
                        text: 'class: Vector2D', link: '/specs/geometry/Vector2D/', collapsed: true, items: [
                            { text: 'constructor: new Vector2D', link: '/specs/geometry/Vector2D/_constructor' },
                            { text: 'method: add', link: '/specs/geometry/Vector2D/add' },
                            { text: 'method: sub', link: '/specs/geometry/Vector2D/sub' },
                            { text: 'method: dot', link: '/specs/geometry/Vector2D/dot' },
                            { text: 'method: cross', link: '/specs/geometry/Vector2D/cross' },
                        ]
                    },
                    { text: 'function: CCW', link: '/specs/geometry/CCW' },
                    { text: 'function: isSegmentsIntersect', link: '/specs/geometry/isSegmentsIntersect' },
                ]
            },
            {
                text: 'ex-math', link: '/specs/ex-math/', collapsed: true, items: [
                    {
                        text: 'class: ExMath', link: '/specs/ex-math/ExMath/', collapsed: true, items: [
                            { text: 'static method: gcd', link: '/specs/ex-math/ExMath/gcd' },
                            { text: 'static method: lcm', link: '/specs/ex-math/ExMath/lcm' },
                            { text: 'static method: getDivisors', link: '/specs/ex-math/ExMath/getDivisors' },
                        ]
                    },
                ]
            },
            {
                text: 'bigint-math', link: '/specs/bigint-math/', collapsed: true, items: [
                    {
                        text: 'class: BigIntMath', link: '/specs/bigint-math/BigIntMath/', collapsed: true, items: [
                            { text: 'static method: isqrt', link: '/specs/bigint-math/BigIntMath/isqrt' },
                            { text: 'static method: modPow', link: '/specs/bigint-math/BigIntMath/modPow' },
                        ]
                    },
                ]
            },
            {
                text: 'next-permutation', link: '/specs/next-permutation/', collapsed: true, items: [
                    { text: 'function: next_permutation', link: '/specs/next-permutation/next_permutation' },
                ]
            },
            {
                text: 'disjoint-set', link: '/specs/disjoint-set/', collapsed: true, items: [
                    {
                        text: 'class: DisjointSet', link: '/specs/disjoint-set/DisjointSet/', collapsed: true, items: [
                            { text: 'constructor: new DisjointSet', link: '/specs/disjoint-set/DisjointSet/_constructor' },
                            { text: 'getter: componentCount', link: '/specs/disjoint-set/DisjointSet/componentCount' },
                            { text: 'method: find', link: '/specs/disjoint-set/DisjointSet/find' },
                            { text: 'method: union', link: '/specs/disjoint-set/DisjointSet/union' },
                            { text: 'method: connected', link: '/specs/disjoint-set/DisjointSet/connected' },
                        ]
                    },
                ]
            },
            {
                text: 'unique-ids', link: '/specs/unique-ids/', collapsed: true, items: [
                    { text: 'function: getUUIDv7', link: '/specs/unique-ids/getUUIDv7' },
                ]
            },
            {
                text: 'binary-heap', link: '/specs/binary-heap/', collapsed: true, items: [
                    {
                        text: 'class: BinaryHeap', link: '/specs/binary-heap/BinaryHeap/', collapsed: true, items: [
                            { text: 'constructor: new BinaryHeap', link: '/specs/binary-heap/BinaryHeap/_constructor' },
                            { text: 'getter: size', link: '/specs/binary-heap/BinaryHeap/size' },
                            { text: 'method: push', link: '/specs/binary-heap/BinaryHeap/push' },
                            { text: 'method: pop', link: '/specs/binary-heap/BinaryHeap/pop' },
                            { text: 'method: peek', link: '/specs/binary-heap/BinaryHeap/peek' },
                            { text: 'method: remove', link: '/specs/binary-heap/BinaryHeap/remove' },
                            { text: 'method: update', link: '/specs/binary-heap/BinaryHeap/update' },
                            { text: 'method: clear', link: '/specs/binary-heap/BinaryHeap/clear' },
                        ]
                    },
                    {
                        text: 'class: BinaryHeapLite', link: '/specs/binary-heap/BinaryHeapLite/', collapsed: true, items: [
                            { text: 'constructor: new BinaryHeapLite', link: '/specs/binary-heap/BinaryHeapLite/_constructor' },
                            { text: 'getter: size', link: '/specs/binary-heap/BinaryHeapLite/size' },
                            { text: 'method: push', link: '/specs/binary-heap/BinaryHeapLite/push' },
                            { text: 'method: pop', link: '/specs/binary-heap/BinaryHeapLite/pop' },
                            { text: 'method: peek', link: '/specs/binary-heap/BinaryHeapLite/peek' },
                            { text: 'method: clear', link: '/specs/binary-heap/BinaryHeapLite/clear' },
                        ]
                    }
                ]
            },
        ]
    }
];
export { sidebar };
