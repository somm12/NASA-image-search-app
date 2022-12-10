## 나사 이미지 검색 SPA 웹 어플리케이션
> NASA 이미지 API를 이용해서 이미지 검색을 할 수 있는 어플리케이션입니다. 간단한 이미지의 정보를 검색을 통해 볼 수 있습니다. <br>
> NASA Image API: https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf

<br>

## 🗓 PROJECT PERIOD : 2022.07.19 ~ 2022.07.21

<br>

## 🛠TECH STACK🛠
<img src="https://img.shields.io/badge/React-000000?style=flat-square&logo=React&logoColor=61DAFB"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=ffffff"/> <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=ffffff"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=ffffff"/> 

<br>
<br/>

## 💎 주요기능 <br>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/63543733/187103552-eb85188f-3d73-48fa-8f38-b410626870ad.png">


### 홈 화면 <br>
> 초기 데이터는 검색어를 seoul로 설정한 서울 이미지입니다. <br>
> 카드 형식으로 이미지 제목, 날짜, description 등 간단한 정보를 볼 수 있습니다.
-----------------------------------------
<img width="600" alt="image" src="https://user-images.githubusercontent.com/63543733/187103868-431b945c-170b-4e5d-a2d6-ef14b2fcf2b3.png">


### 로딩 화면 <br>
> 검색한 이미지를 불러오는데 시간이 조금 걸릴 때, 로딩화면을 볼 수 있습니다.
-----------------------------------------
<div>
<img width="600" alt="image" src="https://user-images.githubusercontent.com/63543733/187103944-4f488cc1-6cb1-4369-bdd3-e6976203ad9f.png">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/63543733/187103981-01efe253-5183-47d8-99e3-40d12bb3cba6.png">
</div>

### 검색 화면 <br>
> 검색 결과가 화면에 나타나고,<br>
> 사진의 개수가 많을 때는 한 페이지당 10p 씩 보여주는 페이지네이션 기능이 있습니다.
---------------------------------------
## 👀 왜 React를 사용할까?
#### 1. 등장배경
시간이 지남에 따라 웹의 사용성이 증가되면서 복잡해지고, 기존의 html, css, JS로만으로는 한계가 생겼다. 
jQuery 라이브러리가 등장 했지만 DOM을 직접 조작하는 방식에서는 벗어나지 못하는 한계가 있어 화면에 수많은 요소들을 직접 관리하는 것이 어려웠음.
프론트엔드 개발을 좀 더 쉽게 할 수 있는 프레임 워크 또는 라이브러리의 필요성이 생겼다.

#### 2. Virtual DOM의 사용
실제로 DOM을 사용하지 않고, 중간에 Virtual DOM을 두어서 Virtual DOM이 변경될 때, 실제 DOM이 변경되도록 설계되었다.
Virtual DOM 불필요한 렌더링 과정을 최소화 하기 위해서 탄생했다.

- Virtual DOM의 내부 작동 원리
React의 불변성을 유지해야하기 때문에 Virtual DOM의 값을 직접 변경하면 안된다. 컴포넌트는 setState를 비교해서 업데이트가 필요한 경우만 render 함수를 호출하고,
state를 직접 변경하면 render함수를 호출하지 않는다. 따라서 Virtual DOM을 변경하려면 setState 메서드를 호출해서 변경해야한다.

- ***🤔 그렇다면 React는 왜 불변성을 유지해야할까?***
위의 말과 같이 React가 상태를 업데이트 하는 원리 때문이다. 이전 참조값과 현재 참조값만을 비교하여 상태변화를 감지하기 때문에, 불변성을 지킴으로써 React는 상태변화를 감지할 수 있다.
얕은 비교수행으로 효율적인 상태 업데이트, 불변성을 지켜줌으로써 외부 데이터로 업데이트하는 것을 막아주어서 원본 데이터가 훼손되는 등 부작용을 막을 수 있다.

#### 3. 컴포넌트 단위 개발
컴포넌트로 작은 단위로 개발하면, 가독성도 높아지고, 간단하여 재사용성, 결합성 등에 용이하다.

#### 4. JSX 지원

JSX(Javascript + xml) 자바스크립트에 대한 확장 구문으로, 리액트에서 element를 제공한다.
```javascript
const hello = () => {
    return (
        <div>
          <h1>안녕하세요</h1>
        </div>
    );
};
```
#### 5. 개인적인 생각
#### React는 왜 라이브러리 일까? <br/>
리액트는 페이스북이 만든, 사용자 UI 구축을 위한 라이브러리
1) 프레임워크 : 
- 개발자가 작업을 하기 위한 전체적인 tool 을 제공한다.
- 개발자는 틀 안에서 그 방식에 맞춰서 작업을 한다.

2) 라이브러리 : 
- 전체적인 틀이 아닌 하나의 기능만을 도구처럼 제공한다.
- 개발자는 필요한 도구(라이브러리)를 가져와서 사용한다.


