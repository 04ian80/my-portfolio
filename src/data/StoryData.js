export const StoryData = [
  {
    id: 1,
    list: '개발을 하는 이유',
    story: (
      <>
        <p>
          <strong>노력한 결과물이 바로 눈에 보인다는 점</strong>이 가장 큰
          이유입니다. 모르는 것이 있을 때 끝까지 파고들다 보면 항상 더 많은
          정보들을 이른 시간 안에 습득하게 되며, 그것들을 응용해봤을 때 결과를
          바로 볼 수 있는 것이 프론트엔드의 매력이라고 생각합니다. 에러가
          발생하면 console로 찍어보면서 에러를 추적하고, {` `}
          <strong>
            모르는 것은 검색을 통해 해답을 찾아 나가는 것에서 성취감을 느껴
          </strong>
          {` `}
          개발에 대해 꾸준히 배우며 성장하고 있습니다.
        </p>
        서로 모르는 것에 대해서 질문하고, 내가 새로 알게 된 것은 남에게 공유하는
        개발 문화를 좋게 생각합니다.`,
      </>
    ),
  },
  {
    id: 2,
    list: '개발자로서의 장점과 고쳐야할 단점',
    story: (
      <>
        <p>[장점]</p>
        <span>
          <strong> 성장이 빠릅니다.</strong> 적응이 빠르고 쉽게 몰입하는 성격
          덕분에 새로운 기술을 배우는 것에 욕심이 많고, 배워본 적 있는 스택 또한
          기본에서 끝내지 않고 더 깊게 파서 저의 것으로 만들고 있습니다. 개발은
          저에게 있어서 <strong>`공부`라는 키워드 외에 저의 `취미`</strong>
          라고도 정의하고 있습니다. 개발자로서 아직 배워야 할 것이 많고, 저의
          `취미` 중 하나이기 때문에 지식을 저장할 공간이 넓게 열려있어 빠르게
          성장하고 있습니다.
        </span>
        <p>[단점]</p> 어떠한 새로운 것을 배울 때 이해하는 속도가 비교적 느린
        편입니다. 하지만 뒤처지는 것에 예민하여서
        <strong>저 만의 기준치와 목표를 만들어 제 것으로 만들곤 합니다.</strong>
        {` `}
        예를 들어, 새롭게 구현을 해봐야 하는 기능이 있다면, `구현`이라는 목표를
        이루기 위해 저의 능력치를 최대한으로 끌어올립니다. 새로운 개념을
        마주했다면 이해할 때까지 공식문서와 stackoverflow 등을 검색해보고, 알 수
        없는 에러나 문제가 발생했다면, 저의 코드를 여러 번 검토하며 결국에는
        목표에 도달하게 됩니다.
      </>
    ),
  },
  {
    id: 3,
    list: '개발자가 되기 위해 해온 노력',
    story: (
      <>
        <p>
          <strong>미니 프로젝트 만들기</strong>
          <ul>
            <li>
              HTML부터 React까지 배운 것을 응용하며 더 많은 것을 배울 수 있다고
              생각하여, 작은 프로젝트를 만들어보면서 여러 가지 시도를
              하였습니다. {` `}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a
                  href='https://github.com/04ian80/html-css-mini-project'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  html-css-mini-project
                </a>
                <a
                  href='https://04ian80.github.io/d-day'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  d-day계산앱&#40;React&#41;
                </a>
              </div>
            </li>
          </ul>
        </p>
        <p>
          <strong>기초 강의 수강</strong>
          <ul>
            <li>
              기초를 탄탄하게 잡기 위해 필요한 강의를 수강하였습니다.
              <ul>
                <li>nomadcoder&#40;HTML/CSS, JavaScript, Next.js&#41;</li>
                <li>
                  드림코딩&#40;JavaScript, TypeScript&#40;수강중&#41;&#41;
                </li>
                <li>인프런&#40;Next.js와 TypeScript를 사용한 클론코딩&#41;</li>
                <li>제로베이스&#40;React&#41;</li>
              </ul>
            </li>
          </ul>
        </p>
        <p>
          <strong>블로그 작성</strong>
          <ul>
            <li>
              학습 중 쉽게 놓칠 수 있는 것, 주변에 개발을 공부하는 사람들에게
              참고용으로 공유할만한, 그리고 깊게 파볼 만한 내용들을 블로그로
              작성해보았습니다.
              <ul>
                <li>
                  <a
                    href='https://velog.io/@a_in/Babel-transpiler-compiler'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    [JavaScript] - Babel은 트랜스파일러&#40;transpiler&#41;일까?
                    컴파일러&#40;compiler&#41;일까?
                  </a>
                </li>
                <li>
                  <a
                    href='https://velog.io/@a_in/WAI-ARIA-role-aria-label'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    WAI-ARIA: role과 aria-label 사용법
                  </a>
                </li>
                <li>
                  <a
                    href='https://velog.io/@a_in/Scss-map'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    [Sass] map 파일은 왜 생겨날까?
                  </a>
                </li>
                ...
                <a
                  href='https://velog.io/@a_in'
                  rel='noopener noreferrer'
                  target='_blank'
                  style={{ color: 'black' }}
                >
                  블로그로 이동
                </a>
              </ul>
            </li>
          </ul>
        </p>
        <p>
          <strong>
            Next.js와 TypeScript를 사용한 협업 사이드 프로젝트 준비 중
          </strong>
          <ul>
            <li>
              백앤드 1명, 프론트엔드 1명으로 구성된 팀으로 실제 운영할 수 있는
              서비스를 만들기 위해 준비 중에 있습니다.&#40;현재 기획 단계를
              마치고 초기 개발 단계에 있습니다.&#41;
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 4,
    list: '향후 목표',
    story:
      '프론트엔드 개발자로서 현재 준비 중인 사이드 프로젝트를 배포하여 실제 사용자가 있는 서비스로 만드는 것이 현재의 최대 목표입니다. 프로젝트를 만드는 와중에도 배우고 싶은, 혹은 그때그때 필요한 언어를 배우면서 지식을 넓혀 새로운 것을 많이 도전할 예정입니다.',
  },
];
