/* eslint-disable @typescript-eslint/naming-convention */
import { AutoComplete, Card, Space, Tag } from 'antd';
import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

// const mockVal = (str: string, repeat = 1) => ({
//   value: str.repeat(repeat),
// });

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
});

const App: React.FC = () => {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [person, setPerson] = useState<{
    name: string;
    img: string;
    followers: number;
    followings: number;
    repos: { id: string; name: string; url: string }[];
  }>();

  const onSearch = (searchText: string) => {
    // console.log(searchText, 'ssss');
    instance.get(`search/users?q=${searchText}`).then((res) => {
      // console.log(res, 'res');
      if (res.data) {
        setOptions(
          res.data.items.map((item) => {
            return {
              ...item,
              value: item.login,
            };
          }),
        );
      }
    });
  };

  const debounceFn = useCallback(debounce(onSearch, 500), []);

  const onSelect = (data: string, opts) => {
    // console.log('onSelect', opts);
    Promise.all([
      instance.get(`user/${opts.id}`),
      instance.get(`user/${opts.id}/repos`),
    ]).then((resArr) => {
      const [userDetailRes, repoDataRes] = resArr;
      if (userDetailRes.data && repoDataRes.data) {
        const { login, avatar_url, followers, following } = userDetailRes.data;

        setPerson({
          name: login,
          img: avatar_url,
          followers,
          followings: following,
          repos: repoDataRes.data.map((item) => ({
            id: item.id,
            name: item.full_name,
            url: item.html_url,
          })),
        });
      }
    });
  };

  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={debounceFn}
        placeholder="input here"
      />
      <Card>
        {person ? (
          <div style={{ display: 'flex' }}>
            <img src={person.img} alt="" style={{ width: 100 }} />
            <div>
              <div>{person.name}</div>
              <Space>
                <span>{person.followers}Followers</span>
                <span>{person.followings}Following</span>
                <span>{person.repos.length}Repos</span>
              </Space>
              <div>
                {person.repos
                  .filter((item, index) => index <= 4)
                  .map((item) => {
                    return (
                      <Tag
                        color="magenta"
                        onClick={() => {
                          window.open(item.url);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        {item.name}
                      </Tag>
                    );
                  })}
              </div>
            </div>
          </div>
        ) : (
          'empty'
        )}
      </Card>
    </>
  );
};

export default App;
