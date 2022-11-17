const ProductIcon = ({ variantColor = '#7a7a7a' }) => {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.3333 23.6667H1.66667C1.35725 23.6667 1.0605 23.5437 0.841709 23.325C0.622916 23.1062 0.5 22.8094 0.5 22.5V1.49999C0.5 1.19058 0.622916 0.893829 0.841709 0.675037C1.0605 0.456245 1.35725 0.333328 1.66667 0.333328H20.3333C20.6428 0.333328 20.9395 0.456245 21.1583 0.675037C21.3771 0.893829 21.5 1.19058 21.5 1.49999V22.5C21.5 22.8094 21.3771 23.1062 21.1583 23.325C20.9395 23.5437 20.6428 23.6667 20.3333 23.6667ZM19.1667 21.3333V2.66666H2.83333V21.3333H19.1667ZM7.5 4.99999V7.33333C7.5 8.26159 7.86875 9.15182 8.52513 9.8082C9.1815 10.4646 10.0717 10.8333 11 10.8333C11.9283 10.8333 12.8185 10.4646 13.4749 9.8082C14.1313 9.15182 14.5 8.26159 14.5 7.33333V4.99999H16.8333V7.33333C16.8333 8.88042 16.2188 10.3642 15.1248 11.4581C14.0308 12.5521 12.5471 13.1667 11 13.1667C9.4529 13.1667 7.96917 12.5521 6.87521 11.4581C5.78125 10.3642 5.16667 8.88042 5.16667 7.33333V4.99999H7.5Z"
        fill={variantColor}
      />
    </svg>
  );
};

export default ProductIcon;