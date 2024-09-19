import React from "react";
import Input from "../components/input";
import TextArea from "../components/textarea";

const write = () => {
  return (
    <form>
      <Input
        title="작성자"
        essential="true"
        placeholder="작성자 명을 입력해 주세요."
        type="text"
      />
      <Input
        title="비밀번호"
        essential="true"
        placeholder="비밀번호를 입력해 주세요."
        type="password"
      />
      <hr className="my-4" />
      <Input
        title="제목"
        essential="true"
        placeholder="제목을 입력해 주세요."
        type="text"
      />
      <hr className="my-4" />
      <TextArea
        title="내용"
        essential="true"
        placeholder="내용을 입력해 주세요."
      />
      <hr className="my-4" />
      <Input title="주소" placeholder="01234" type="text" />
      <button className="whiteBtn py-3 px-4">우편번호 검색</button>
      <Input placeholder="주소를 입력해 주세요." type="text" />
      <Input placeholder="상세주소" type="text" />
      <hr className="my-4" />
      <Input
        title="유투브 링크"
        placeholder="링크를 입력해 주세요."
        type="url"
      />
      <hr className="my-4" />
      <Input
        className="imgUploadBox"
        title="사진 첨부"
        placeholder="클릭해서 사진 업로드"
        type="file"
        accept="image/*"
      />
      <Input
        className="imgUploadBox"
        placeholder="클릭해서 사진 업로드"
        type="file"
        accept="image/*"
      />
      <Input
        className="imgUploadBox"
        placeholder="클릭해서 사진 업로드"
        type="file"
        accept="image/*"
      />
      <button>취소</button>
      <button type="submit" className="blueBtn py-3 px-4">
        등록하기
      </button>
    </form>
  );
};

export default write;
