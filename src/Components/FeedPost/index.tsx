import * as S from './style'

export function FeedPost() {
  return (
    <S.feedPostStyled>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/102992996?s=400&u=80dfdee29368bfbd801dd0d3d6f27a84009a10f1&v=4"
          alt="Foto do perfil"
        />

        <div>
          <h3>@Gabrielsupz</h3>
          <h4>há 5 min</h4>
        </div>

        <svg
          width="4"
          height="13"
          viewBox="0 0 4 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="1.39286"
            cy="1.39286"
            r="1.39286"
            transform="matrix(-1 0 0 1 3.71387 0)"
            fill="#8E8E8E"
          />
          <circle
            cx="1.39286"
            cy="1.39286"
            r="1.39286"
            transform="matrix(-1 0 0 1 3.71387 5.10706)"
            fill="#8E8E8E"
          />
          <circle
            cx="1.39286"
            cy="1.39286"
            r="1.39286"
            transform="matrix(-1 0 0 1 3.71387 10.2142)"
            fill="#8E8E8E"
          />
        </svg>
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
          laboriosam sapiente{' '}
        </p>
        <img
          src="https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
          alt="post"
        />
      </div>

      <div>
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 6.45986C24 13.7532 12.8796 19.6567 12.4061 19.9005C12.2813 19.9658 12.1417 20 12 20C11.8583 20 11.7187 19.9658 11.5939 19.9005C11.1204 19.6567 0 13.7532 0 6.45986C0.00198508 4.74719 0.702493 3.10522 1.94784 1.89418C3.19319 0.683141 4.88167 0.00193039 6.64286 0C8.85536 0 10.7925 0.925218 12 2.48913C13.2075 0.925218 15.1446 0 17.3571 0C19.1183 0.00193039 20.8068 0.683141 22.0522 1.89418C23.2975 3.10522 23.998 4.74719 24 6.45986Z"
            fill="#F37671"
          />
        </svg>
        <h4>20 Curtidas</h4>
      </div>
    </S.feedPostStyled>
  )
}
