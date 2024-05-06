// cardData.jsx
export const baseImages = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
];

export function initializeCards() {
    return [...baseImages, ...baseImages]
        .sort(() => Math.random() - 0.5)
        .map((name, index) => ({ id: index, imageName: name, flipped: false }));
}
