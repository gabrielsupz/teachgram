import { useFriendsList } from '../../Contexts/FriendsListContext'
import { BackArrowButton } from '../BackArrowButton'
import { FriendItem } from '../FriendItem'
import * as S from './style'

export function FriendsList() {
  const { friendsListIsActive, setFriendsListIsActive } = useFriendsList()
  return (
    <S.containingFriendsListStyled active={friendsListIsActive}>
      <div className="box">
        <header>
          <BackArrowButton backFunction={() => setFriendsListIsActive(false)} />
          <img src="/logoIcon.svg" alt="Logo teachgram" />
          <button
            className="closeButton"
            onClick={() => setFriendsListIsActive(false)}
          >
            <img src="/close.svg" alt="Icone Fechar" />
          </button>
        </header>
        <h2>Amigos</h2>
        <S.friendsListStyled>
          <FriendItem />
          <FriendItem />
          <FriendItem />
          <FriendItem />

          <S.friendsListPagesStyled>
            <div>
              <button>
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.60727 0.306027C6.87045 0.569207 6.87045 0.995905 6.60727 1.25908L2.23467 5.63168C1.95902 5.90733 1.97405 6.35867 2.26743 6.61538L6.57451 10.3841C6.85462 10.6292 6.883 11.0549 6.63791 11.335C6.39282 11.6151 5.96707 11.6435 5.68696 11.3984L1.37988 7.62972C0.499736 6.8596 0.45465 5.50559 1.28161 4.67862L5.65421 0.306027C5.91739 0.0428477 6.34409 0.0428477 6.60727 0.306027Z"
                    fill="#C4C4C4"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.739746 6.17391C0.739746 5.80172 1.04147 5.5 1.41366 5.5H11.5224C11.8945 5.5 12.1963 5.80172 12.1963 6.17391C12.1963 6.54611 11.8945 6.84783 11.5224 6.84783H1.41366C1.04147 6.84783 0.739746 6.54611 0.739746 6.17391Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </button>
            </div>
            <div className="active">1</div>
            <div>
              <button>2</button>{' '}
            </div>
            <div>
              <button>3</button>{' '}
            </div>
            <div>
              <button>4</button>{' '}
            </div>
            <div>
              <button>
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.39322 0.306027C6.13004 0.569207 6.13004 0.995905 6.39322 1.25908L10.7658 5.63168C11.0415 5.90733 11.0264 6.35867 10.7331 6.61538L6.42597 10.3841C6.14587 10.6292 6.11749 11.0549 6.36258 11.335C6.60767 11.6151 7.03342 11.6435 7.31352 11.3984L11.6206 7.62972C12.5008 6.8596 12.5458 5.50559 11.7189 4.67862L7.34628 0.306027C7.0831 0.0428477 6.6564 0.0428477 6.39322 0.306027Z"
                    fill="#C4C4C4"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2607 6.17391C12.2607 5.80172 11.959 5.5 11.5868 5.5H1.47813C1.10594 5.5 0.80422 5.80172 0.80422 6.17391C0.80422 6.54611 1.10594 6.84783 1.47813 6.84783H11.5868C11.959 6.84783 12.2607 6.54611 12.2607 6.17391Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </button>
            </div>
          </S.friendsListPagesStyled>
        </S.friendsListStyled>
      </div>
    </S.containingFriendsListStyled>
  )
}
